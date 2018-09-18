import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Notes from '../Notes/Notes';
import AddNote from '../AddNote/AddNote';
import Label from '@material-ui/icons/Label';
import AppHeaderContainer from '../AppHeader/AppHeaderContainer';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as cardActions from "../../redux/actions/cardActions";
import moment from 'moment';
import Notifications from '../Notifications/Notifications';
import SortCardContainer from '../SortCards/SortCardContainer';

const styles = {
    avatar: {
        width: 190,
        height: 190,
        margin: '0px auto',
    },
    center: {
        margin: '20px auto',
    },
    label: {
        width: 250,
        height: 250,
        color: '#cccccc',
        textAlign: 'center',
        margin: 'auto',
        display: 'block',
    },
    fullList: {
        width: 'auto',
    },
};

class BodyContainer extends Component {

    handleAddLabel = (e) => {
        const labelName = e.target.value.trim();

        if ((e.key === ' ' || e.key === 'Enter') && labelName.length) {
            e.preventDefault();
            const savedNote = e.target.closest('.editable-note').id;

            //note already exist - update
            if (savedNote) {
                const noteId = parseInt(savedNote, 10);
                const addLabelToNote = {
                    noteId,
                    name: labelName,
                    updated: moment.now(),
                }

                this.props.actions.updateLabel(addLabelToNote);
            } else {
                //add label to local note
                const labels = [
                    ...this.props.labels,
                    {
                        id: this.props.labels.length + 1,
                        name: labelName
                    }
                ];
                this.props.actions.createLocalLabel(labels);
            }

            e.target.value = "";
        }
    }

    handleDeleteLabel = (e) => {
        const labelId = parseInt(e.currentTarget.closest('.label').id, 10);
        const savedNote = e.target.closest('.editable-note').id;

        if (savedNote) {
            const noteId = parseInt(savedNote, 10);

            this.props.actions.deleteSavedNoteLabel({labelId, noteId});

        } else {
            this.props.actions.deleteLocalLabel(labelId);
        }
    }

    handleSaveNote = (e) => {
        e.preventDefault();
        const card = e.target.closest('.editable-note');
        const title = card.querySelector('[note-title]').value;
        const body = card.querySelector('[note-body]').value;

        if (title || body) {
            //note already exist - update
            if (card.id) {
                const noteId = parseInt(card.id, 10);
                const addDataToNote = {
                    noteId,
                    title: title,
                    body: body,
                    updated: moment.now(),
                    visible: true,
                }

                this.props.actions.updateNote(addDataToNote);
            } else {
                let notes = [];

                //no previous notes
                if (!this.props.noteData) {
                    notes = [
                        {
                            id: 0,
                            title,
                            body,
                            labels: [],
                            created: moment.now(),
                            updated: moment.now(),
                            visible: true,
                        }
                    ];
                } else {
                    notes = [
                        ...this.props.noteData,
                        {
                            id: Object.keys(this.props.noteData).length,
                            title,
                            body,
                            labels: [...this.props.labels],
                            updated: moment.now(),
                            created: moment.now(),
                            visible: true,
                        }
                    ];
                } 
                
                this.props.actions.createNote(notes);
            }

            card.reset();
        }
    }

    handleDeleteNote = (e) => {
        const noteId = parseInt(e.currentTarget.getAttribute('delete-id'), 10);
        this.props.actions.deleteNote(noteId);
    }

    closeSavedNotification = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.props.actions.closeNotification();
    };

    render(props) {
        const { 
            classes, 
            noteData,
            showSavedNotification,
            labels
        } = this.props;

        return (
            <div>
                <AppHeaderContainer />
                <Notifications />
                <AddNote 
                    handleSaveNote={this.handleSaveNote}
                    handleAddLabel={this.handleAddLabel}
                    handleDeleteLabel={this.handleDeleteLabel}
                    labels={labels}
                />
                <SortCardContainer />
                {
                   noteData && noteData.length 
                    ?
                    <Notes 
                            handleDeleteNote={this.handleDeleteNote}
                            handleAddLabel={this.handleAddLabel}
                            handleDeleteLabel={this.handleDeleteLabel}
                            handleSaveNote={this.handleSaveNote}
                            noteData={noteData}

                    />
                    : 
                    <React.Fragment>
                        <Label className={classes.label} align="center" />
                        <Typography variant="subheading" gutterBottom align="center">
                            No Ideas Yet
                        </Typography>
                    </React.Fragment>
                }
                <Notifications 
                    showSavedNotification={showSavedNotification}
                    closeSavedNotification={this.closeSavedNotification}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ cardReducer }) => {
    return {
        noteData: cardReducer.noteData,
        labels: cardReducer.labels,
        showSavedNotification: cardReducer.showSavedNotification
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(cardActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BodyContainer));