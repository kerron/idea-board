import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Info from '@material-ui/icons/Info';
import Masonry from 'react-masonry-component';
import Tooltip from '@material-ui/core/Tooltip';

import moment from 'moment';

const styles = theme => ({
    actions: {
        visibility: 'visible',
    },
    card: {
        minWidth: 275,
        maxWidth: 240,
        margin: theme.spacing.unit,
        flex: '1 auto',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'flex-start'
    },
    saveButton: {
        flex: 1,
        display: 'none'
    },
    chip: {
        margin: theme.spacing.unit,
        zIndex: '99999'
    },
    label: {
        margin: theme.spacing.unit,
        fontSize: '11px',
    },
    inputTitle: {
        margin: theme.spacing.unit,
        fontWeight: 'bold',
        fontSize: '18px',
    },
    input: {
        margin: theme.spacing.unit,
        width: '100%'
    },
    info: {
        float: 'right',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const masonryOptions = {
    transitionDuration: 200
};

const Notes = (props) => {
    const {
        classes,
        noteData,
        handleDeleteNote,
        handleAddLabel,
        handleSaveNote,
        handleDeleteLabel
    } = props;

    return (
        <Masonry
            options={masonryOptions} 
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
        >
        {
            noteData.map((note) => (
                    <form 
                        key={note.id} 
                        id={note.id} 
                        className="editable-note" 
                        onSubmit={handleSaveNote}
                        style={{
                            display: note.visible ? 'block' : 'none'
                        }}
                    >
                    <Card  
                        className={`${classes.card}`}
                        id={note.id}
                    >
                    <CardContent>
                        <Input
                            disableUnderline
                            fullWidth
                            defaultValue={note.title}
                            className={`${classes.inputTitle} note-title`}
                            multiline
                            required
                                    inputProps={{
                                        'note-title': 'note-title'
                                    }}
                        />
                        <Input                          
                            disableUnderline
                            fullWidth
                            placeholder="Bring your idea to life"
                            defaultValue={note.body}
                            multiline
                            className={`${classes.input} note-body`}
                                    inputProps={{
                                        'note-body': 'note-body'
                                    }}
                        />
                        <div className="label-container">
                            <Input
                                disableUnderline
                                onKeyPress={handleAddLabel}
                                placeholder="Add label (separated by space)"
                                fullWidth
                                className={`${classes.label} note-labels`}
                                        inputProps={{
                                            'note-labels': 'note-labels'
                                        }}
                            />
                            {
                                note.labels && note.labels.map((label, i) => (
                                    <Chip
                                        key={label.id}
                                        id={label.id}
                                        label={label.name}
                                        onDelete={handleDeleteLabel}
                                        className={`${classes.chip} label`}
                                        color="default"
                                    />
                                ))
                            }
                        </div>
                    </CardContent>
                    <CardActions
                        className={classes.actions}
                    >
                        <Tooltip 
                        title={`Created: ${moment(note.created).format('DD MMM YY')}, 
                                Edited: ${moment(note.updated).format('DD MMM, H:MM')}`} 
                            placement="bottom"
                        >
                            <Info className={classes.info} color="disabled" />
                        </Tooltip>
                        <IconButton 
                            aria-label="Delete" 
                            onClick={handleDeleteNote}
                            delete-id={note.id}
                        >
                            <DeleteIcon />
                        </IconButton>
                        <Button 
                            type="submit" 
                            size="small" 
                            color="primary" 
                            className={`${classes.saveButton} hidden`}
                        >
                            Save
                        </Button>
                    </CardActions>
                </Card>
                </form>
                ))
            }
        </Masonry>
    );
}

export default (withStyles(styles)(Notes));