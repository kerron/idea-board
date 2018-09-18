import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const Notifications = (props) => {
    const { 
        showSavedNotification, 
        closeSavedNotification 
    } = props;
    
    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                        horizontal: 'center'
                }}
                autoHideDuration={1500}
                open={showSavedNotification}
                onClose={closeSavedNotification}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Idea Saved!</span>}
            />
        </div>
    );
}

export default Notifications;