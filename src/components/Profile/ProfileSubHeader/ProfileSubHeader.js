import React from 'react';
import Typography from '@material-ui/core/Typography';

const ProfileSubHeader = (props) => {
    return (
        <div>
            <Typography component="p" align="center" variant="subheading">
                You've created {props.noteCount} Notes
            </Typography>
        </div>
    );
};

export default ProfileSubHeader;