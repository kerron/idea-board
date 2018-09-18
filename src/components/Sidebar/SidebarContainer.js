import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SidebarLinks from './SidebarLinks/SidebarLinks';
import SidebarHeader from './SidebarHeader/SidebarHeader';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class SidebarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openSidebar: false,
        };
    }

    toggleDrawer = () => {
        (this.state.openSidebar)
            ? this.setState({ openSidebar: false, })
            : this.setState({ openSidebar: true, });
    };


    render() {
        const { classes } = this.props;
        return (
            <div>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    onClick={this.toggleDrawer}
                    aria-label="Menu"
                >
                    <MenuIcon />
                </IconButton>
                <Drawer 
                    open={this.state.openSidebar} 
                    onClose={this.toggleDrawer}
                >
                    <SidebarHeader />
                    <SidebarLinks />
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(SidebarContainer);
