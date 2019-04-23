// Swipeable Temporary drawer
// You can make the drawer swipeable with the SwipeableDrawer component.

// This component comes with a 2 kB gzipped payload overhead. Some low-end
// mobile devices won't be able to follow the fingers at 60 FPS. You can use
// the disableBackdropTransition property to help.

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";


const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class SwipeableTemporaryDrawer extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem button key='home'>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                    <ListItem button key='projects'>
                        <ListItemText primary={'Projects'} />
                    </ListItem>
                    <ListItem button key='about me'>
                        <ListItemText primary={'About Me'} />
                    </ListItem>
                    {/* {['Home', 'Projects', 'About Me'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <FaGithub /> : <FaLinkedinIn />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem> ))} */}
                </List>
                <Divider />
                <List>
                    <ListItem button key='github'>
                        <ListItemIcon><FaGithub /></ListItemIcon>
                        <ListItemText primary={'GitHub'} />
                    </ListItem>
                    <ListItem button key='e-mail'>
                        <ListItemIcon><IoIosMail /></ListItemIcon>
                        <ListItemText primary={'E-Mail'} />
                    </ListItem>
                    <ListItem button key='linkedin'>
                        <ListItemIcon><FaLinkedinIn /></ListItemIcon>
                        <ListItemText primary={'LinkedIn'} />
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div>
                <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

SwipeableTemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);