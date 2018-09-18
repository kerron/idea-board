import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    container: {
        margin: '0 auto 40px',
        minWidth: 275,
        maxWidth: 500,
    },
    closeButton: {
        flex: 1
    },
    chip: {
        margin: theme.spacing.unit,
        zIndex: '99999'
    },
    label: {
        margin: theme.spacing.unit,
        fontSize: '11px',
    },
    hidden: {
        display: 'none'
    },
    inputTitle: {
        margin: theme.spacing.unit,
        fontWeight: 'bold',
        fontSize: '18px',
        minHeight: 20,
    },
    input: {
        margin: theme.spacing.unit,
        width: '100%'
    },
    card: {
        margin: theme.spacing.unit,
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

const AddNote = (props) => {
        const { 
            classes, 
            labels, 
            handleSaveNote, 
            handleAddLabel, 
            handleDeleteLabel 
        } = props;

        return (
            <div className={classes.container}>
                <form className="editable-note" onSubmit={handleSaveNote}>
            <Card className={classes.card}>
                <CardContent>
                    <Input
                        disableUnderline
                        fullWidth
                        placeholder="Title"
                        className={classes.inputTitle}
                        multiline
                        autoFocus
                        required
                        inputProps={{
                            'note-title': 'note-title',
                            'maxLength': '140'
                        }}
                    />
                    <Input
                        disableUnderline
                        fullWidth
                        placeholder="Bring your idea to life"
                        multiline
                        className={classes.input}
                        inputProps={{
                            'note-body': 'note-body',
                            'maxLength': '140'

                        }}
                    />
                    <div className={`${classes.hidden} label-container hidden`}>
                        <Input
                            disableUnderline
                            onKeyPress={handleAddLabel}
                            placeholder="Add label (separated by space)"
                            fullWidth
                            className={classes.label}
                            inputProps={{
                                'note-labels': 'note-labels'
                            }}
                        />
                        {
                            labels && labels.map((label, i) => (
                                <Chip
                                    key={i}
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
                    className="hidden"
                    style={{ display: 'none' }}                    
                >
                        <Button 
                            type="submit" 
                            size="small" 
                            color="primary" 
                            className={classes.closeButton}
                        >
                        Save
                    </Button>
                </CardActions>
            </Card>
                </form>
             </div >
        );
    }


export default (withStyles(styles)(AddNote));