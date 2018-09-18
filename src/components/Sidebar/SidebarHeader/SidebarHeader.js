import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    heading: {
        textAlign: 'center',
    },
    avatarContainer: {
        backgroundColor: '#e8e8e8',
        padding: '20px 10px',
    },
    sidebarAvatar: {
        width: 120,
        height: 120,
        margin: '0px auto',
    },
}

const SidebarHeader = (props) => {
    const { classes } = props;
    return (
        <div className={classes.avatarContainer}>
            <Avatar
                alt="John Doe"
                src="https://static.makeuseof.com/wp-content/uploads/2017/07/Recover-Windows-Profile-Featured-670x335.jpg"
                className={classes.sidebarAvatar}
            />
            <Typography variant="headline" className={classes.heading}>
                John Doe
            </Typography>
            <Typography variant="subheading" className={classes.heading}>
                John thinks a lot...
            </Typography>
        </div>
    );
}

export default withStyles(styles)(SidebarHeader);
