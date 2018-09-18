import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Charts from '../../Charts/Charts';

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        maxWidth: 450,
        margin: '20px auto',
    },
    avatar: {
        width: 200,
        height: 200,
        margin: '0 auto'
    },
});

const ProfileBody = (props) => {
    const { classes } = props;

    return (
        <div>
            <Paper
                elevation={0}
                square={true}
                className={classes.root}
            >
                <Charts />
            </Paper>
        </div>
    );
};

export default withStyles(styles)(ProfileBody);