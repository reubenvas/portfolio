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

import { Link } from 'react-scroll';


const styles = {
    // fix so that drawer is behind navbar
    root: {
        backgroundColor: 'yellow'
    },
    list: {
        width: 250,
        // 'padding-top': '8vh'
    },
    fullList: {
        width: 'auto',
        // this is not in use
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
                    {['Home', 'Projects', 'AboutMe'].map(linkName => (
                        <ListItem button key={linkName}>
                            <ListItemText >
                                <Link
                                    activeClass="active"
                                    to={linkName}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={this.toggleDrawer('left', false)}
                                    onSetActive={
                                        (linkName) => {
                                            // make the top navbar change color to its background
                                            if (linkName === 'Home') {
                                                // this.adjustShadow('0px 0px 10px 0px rgba(0,0,0,0.75)');
                                                console.log('make shadow on navbar visible and dark')
                                            } else if (linkName === 'Projects') {
                                                console.log('intro is turned off');
                                            } else if (linkName === 'AboutMe') {
                                                // this.adjustShadow('0px 28px 27px 3px rgba(0,0,0,0.75)');
                                                console.log('make shadow even more visble and dark');
                                            }
                                            console.log(`link was pressed: ${linkName}`);
                                        }}
                                    >
                                    {linkName.split('').map(l => /([A-Z])/.test(l) ? ' ' + l : l).join('').trim()}
                                </Link>
                            </ListItemText >
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {[[<FaGithub/>, 'Github'], [<IoIosMail/>, 'E-Mail'], [<FaLinkedinIn/>, 'LinkedIn']].map((link, i) => (
                            <ListItem button key={i}>
                        {link.map((comp, i) => typeof comp !== 'string' ? <ListItemIcon key={i}>{comp}</ListItemIcon> : <ListItemText key={i} primary={comp} onClick={ll => {
                        window.location.href = [['Github', 'https://github.com/reubenvas/'], ['E-Mail', 'mailto: reuben.vas@hotmail.com'], ['LinkedIn', 'https://www.linkedin.com/in/reuben-vas/']].find(el => el[0] === ll.target.innerText)[1];
                        return ll.target.innerText;
                        }}/>)}
                            </ListItem>
                    ))}
                </List>
            </div>
        );
        return (
            <div >
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