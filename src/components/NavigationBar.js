import React, { Component } from 'react';

import { Link } from 'react-scroll';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";

import Drawer from './Drawer';

const isMobileView = () => window.innerWidth < 830 ? true : false;

class NavigationBar extends Component {
    state = {
        mobileMenu: isMobileView(),
        navColor: '',
        boxShadow: '',
    }

    adjustNavbarMobile = () => {
        const bool = isMobileView();
        this.setState({ mobileMenu: bool });
    }

    adjustShadow = (shadow) => {
        if (this.state.boxShadow !== shadow) {
            this.setState({ boxShadow: shadow });
        }
    }

    componentDidMount = () => {
        this.adjustNavbarMobile();
        window.addEventListener('resize', this.adjustNavbarMobile);
        if (this.state.mobileMenu) this.props.turnOffIntro();
    }
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.adjustNavbarMobile);
    }

    menu = () => {
        // ADD LINKS TO MOBILE VIEW AS WELL AND MAKE SHADOW WORK!
        if (this.state.mobileMenu) {
            return <Drawer />;
        }
        return (
            <div className="navbar-content">
                <div className="link-container">
                    {['Home', 'Projects', 'AboutMe'].map(linkName => (
                        <Link
                            activeClass="active"
                            to={linkName}
                            spy={true}
                            smooth={true}
                            duration={500}
                            onSetActive={
                                (linkName) => {
                                    // make the top navbar change color to its background
                                    if (linkName === 'Home') {
                                        this.adjustShadow('0px 0px 10px 0px rgba(0,0,0,0.75)');
                                    } else if (linkName === 'Projects') {
                                        this.props.turnOffIntro();
                                    } else if (linkName === 'AboutMe') {
                                        this.adjustShadow('0px 28px 27px 3px rgba(0,0,0,0.75)');
                                    }
                                    console.log(`link was pressed: ${linkName}`);
                                }}>
                            {linkName.split('').map(l => /([A-Z])/.test(l) ? ' ' + l : l).join('').trim()}
                        </Link>
                    ))}
                </div>

                <div className="profileLink-container">
                    <FaGithub onClick={() => window.location.href = "https://github.com/reubenvas/"} />
                    <IoIosMail onClick={() => window.location.href = "mailto: reuben.vas@hotmail.com"} />
                    <FaLinkedinIn onClick={() => window.location.href = "https://www.linkedin.com/in/reuben-vas/"} />
                </div>
            </div>
        );
    }

    render() {
        console.log(this.state.navColor);

        return (
            <nav className="navbar-container" style={{ backgroundColor: this.state.navColor, boxShadow: this.state.boxShadow }}>
                {this.menu()}
            </nav>
        );

    }
}

export default NavigationBar;