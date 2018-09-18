import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Label from '@material-ui/icons/Label';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const SidebarLinks = () => (
    <React.Fragment>
        <Divider />
        <Typography variant="title" gutterBottom align="left">
            Labels (v2)
        </Typography>
        <List>
            <ListItem component={Link} to="/" button>
                <ListItemIcon>
                    <Label />
                </ListItemIcon>
                <ListItemText primary="default" />
            </ListItem>
            <ListItem component={Link} to="/work" button>
                <ListItemIcon>
                    <Label />
                </ListItemIcon>
                <ListItemText primary="work" />
            </ListItem>
            <ListItem component={Link} to="/personal" button>
                <ListItemIcon>
                    <Label />
                </ListItemIcon>
                <ListItemText primary="personal" />
            </ListItem>
            <ListItem component={Link} to="/rockets!" button>
                <ListItemIcon>
                    <Label />
                </ListItemIcon>
                <ListItemText primary="rockets!" />
            </ListItem>
        </List>
        </React.Fragment>
);

export default SidebarLinks;
