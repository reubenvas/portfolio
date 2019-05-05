// Swipeable Temporary drawer
// You can make the drawer swipeable with the SwipeableDrawer component.

// This component comes with a 2 kB gzipped payload overhead. Some low-end
// mobile devices won't be able to follow the fingers at 60 FPS. You can use
// the disableBackdropTransition property to help.

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
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
        // paddingTop: '8vh'
    },
    fullList: {
        width: 'auto',
        // this is not in use
    },
    drawer: {
        backgroundColor: 'white'
    },
    drawerTop: {
        top: '8vh',
        backgroundColor: 'white'
    }
};

class TemporaryDrawer extends React.Component {
    state = {
        top: false,
        bottom: false,
        right: false,

        left: false,

        isNavOnTop: true || false
    };

    handleScroll = () => {
        // console.log('navbar at the top?',this.isAtTopOffPage(document.querySelector('.navbar-container')));

        if (this.isAtTopOffPage(document.querySelector('.navbar-container')) !== this.state.isNavOnTop) {
            console.log('STATE, is nav on top:', this.state.isNavOnTop);
            console.log('SJÄLVA FUNKTIONEN, is nav on top:', this.isAtTopOffPage(document.querySelector('.navbar-container')));
        // ÄNDRA SÅ MAN INTE ÄNDRAR STATE PÅ VARJE SCROLL
            this.setState({isNavOnTop: this.isAtTopOffPage(document.querySelector('.navbar-container'))})
        }
        // else {
        //     this.setState({isNavOnTop: false})
        // }


    }

    componentDidMount= () => {
        window.addEventListener('scroll', this.handleScroll);
        console.log(this.isAtTopOffPage(document.querySelector('.navbar-container')));
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    isAtTopOffPage = el => el.getBoundingClientRect().y === 0;

    render() {
        const { classes } = this.props;

        // console.log('these are the style classes:', classes);
        // console.log('is nav in the very top?:', this.state.isNavOnTop);

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
                                                // console.log('make shadow on navbar visible and dark')
                                            } else if (linkName === 'Projects') {
                                                // console.log('intro is turned off');
                                            } else if (linkName === 'AboutMe') {
                                                // this.adjustShadow('0px 28px 27px 3px rgba(0,0,0,0.75)');
                                                // console.log('make shadow even more visble and dark');
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
                    {[[<FaGithub />, 'Github'], [<IoIosMail />, 'E-Mail'], [<FaLinkedinIn />, 'LinkedIn']].map((link, i) => (
                        <ListItem button key={i}>
                            {link.map((comp, i) => typeof comp !== 'string' ?
                                <ListItemIcon key={i}>{comp}</ListItemIcon> :
                                <ListItemText
                                    key={i}
                                    primary={comp}
                                    onClick={ll => {
                                        window.location.href = [['Github', 'https://github.com/reubenvas/'], ['E-Mail', 'mailto: reuben.vas@hotmail.com'], ['LinkedIn', 'https://www.linkedin.com/in/reuben-vas/']].find(el => el[0] === ll.target.innerText)[1];
                                    }} />)}
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        const close = () => {

            console.log('stängs');

            this.toggleDrawer('left', false)();
            // window.document.body.style.overflowY = 'visible';

            if (this.state.isNavOnTop) {
                document.querySelector('.navbar-container').style.zIndex = 10;
                document.querySelector('.navbar-container').style.backgroundColor = 'rgba(255, 255, 255, 0.823)';
            }
        }

        const open = () => {

            console.log('öppnas');

            this.toggleDrawer('left', true)();
            // window.document.body.style.overflowY = 'hidden';

            if (this.state.isNavOnTop) {
                document.querySelector('.navbar-container').style.zIndex = 1400;
                document.querySelector('.navbar-container').style.backgroundColor = 'white';
            } else {
                document.querySelector('.navbar-container').style.zIndex = 10;
                document.querySelector('.navbar-container').style.backgroundColor = 'rgba(255, 255, 255, 0.823)';
            }
        }

        return (
            <div >
                <Button onClick={open}>Open Left</Button>
                <Drawer
                    // classes={{ paper: classes.drawerPaperStyles }}
                    classes={{paper: classes[this.state.isNavOnTop ? 'drawerTop' : 'drawer' ]}}
                    open={this.state.left}
                    onClose={() => close()}
                    onOpen={() => open()}
                    >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);