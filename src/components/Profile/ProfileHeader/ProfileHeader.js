import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
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

const ProfileHeader = (props) => {
    const { classes } = props;

    return (
            <Paper
                elevation={0}
                square={true}
                className={classes.root}
            >
                <Avatar
                    className={classes.avatar}
                    src="https://static.makeuseof.com/wp-content/uploads/2017/07/Recover-Windows-Profile-Featured-670x335.jpg"
                    alt="John Doe"
                >
                </Avatar>
                <Typography component="p" align="center" variant="headline">
                    John Doe
                </Typography>
                {props.children}
            </Paper>
    );
};

export default withStyles(styles)(ProfileHeader);