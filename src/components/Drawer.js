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

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { GiSplitCross } from 'react-icons/gi';

import { Link } from 'react-scroll';


const styles = {
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

let navBar;

class TemporaryDrawer extends React.Component {
	state = {
		isOpen: false,
		isNavOnTop: false,
		buttonText: < FiMenu />
	};

	styleNavBarDefault = () => {
		navBar.style.zIndex = 10;
		navBar.style.backgroundColor = 'rgba(255, 255, 255, 0.823)';
	}

	styleNavBarTop = () => {
		navBar.style.zIndex = 1400;
		navBar.style.backgroundColor = 'rgb(216, 216, 216)';
	}

	handleScroll = () => {

		if (this.isAtTopOffPage(navBar) !== this.state.isNavOnTop) {
			this.setState({ isNavOnTop: this.isAtTopOffPage(navBar) })
		}

		// CHANGE color on navbar when opening drawer!!
		// navBar.style.backgroundImage = 'linear-gradient(to top, #282726, #2b2a2a, #2e2d2d, #313131, #343434)';

		if (this.state.isNavOnTop && this.state.isOpen) {
			this.styleNavBarTop();
		} else {
			this.styleNavBarDefault();
		}
	}

	componentDidMount = () => {
		navBar = document.querySelector('.navbar-container');

		window.addEventListener('scroll', this.handleScroll);
		navBar.style.justifyContent = 'flex-end';
	};

	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.handleScroll);
	};

	isAtTopOffPage = el => (
		// make this dependent on what kind of browser the user is on.
		// For instance, on chrome mobile there is no glitch, but on Safari
		// there is still glitching
		el.getBoundingClientRect().y <= 10
	)

	render() {
		const { classes } = this.props;

		const sideList = (
			<div className={classes.list}>
				<List onClick={() => console.log('list was clicked')}>
					{['Home', 'Projects', 'AboutMe'].map(linkName => (
						<ListItem button key={linkName} >
							<ListItemText >
								<Link
									activeClass="active"
									to={linkName}
									spy={true}
									smooth={true}
									duration={500}
									onClick={close}
									onSetActive={
										(linkName, gg) => {
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
											console.log(this.state.isOpen);
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
			console.log('closing..');

			this.setState({ isOpen: false })
			this.setState({ buttonText: < FiMenu /> });

			if (this.state.isNavOnTop) {
				this.styleNavBarDefault();
			}
		}

		const open = () => {
			this.setState({ isOpen: true })
			this.setState({ buttonText: < GiSplitCross /> });

			if (this.state.isNavOnTop) {
				this.styleNavBarTop();
			} else {
				this.styleNavBarDefault();
			}
		}

		return (
			<div >
				<Button
					style={{'font-size': 'calc(30px - 2vmin)'}}
					onClick={!this.state.isOpen ? open : close}
				>
					{this.state.buttonText}
				</Button>
				<Drawer
					// classes={{ paper: classes.drawerPaperStyles }}
					classes={{ paper: classes[this.state.isNavOnTop ? 'drawerTop' : 'drawer'] }}
					open={this.state.isOpen}
					onClose={close}
					onOpen={open}
				>
					<div
						tabIndex={0}
						role="button"
						onClick={close}
						onKeyDown={close}
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