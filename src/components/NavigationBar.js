import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { Link } from 'react-scroll';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";

import Drawer from './Drawer';


class NavigationBar extends Component {
    state = {
        mobileMenu: false,
        navColor: '',
        boxShadow: '',
    }


    adjustNavbarMobile = () => {
        const bool = window.innerWidth < 830 ? true : false;
        this.setState({ mobileMenu: bool });
    }

    adjustShadow = (shadow) => {
        if (this.state.boxShadow !== shadow) {
            this.setState({ boxShadow: shadow });
        }
    }

    toggleName = (linkName) => {
        if (linkName !== 'Home') {

        }
    }

    componentDidMount = () => {
        this.adjustNavbarMobile();
        window.addEventListener('resize', this.adjustNavbarMobile);
    }
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.adjustNavbarMobile);
    }

    menu = () => {
        if (this.state.mobileMenu) {
            return (
                <Nav>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Drawer />
                </Nav>
            );
        }
        return (
            <div className="link-container">
                <Link
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={
                        (ggg) => {
                            // make the top navbar change color to its background
                            this.adjustShadow('0px 0px 10px 0px rgba(0,0,0,0.75)');
                            console.log(`link was pressed: ${ggg}`);
                        }}>
                    Home
            </Link>
                <Link
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={
                        (ggg) => {
                            console.log(`link was pressed: ${ggg}`);
                            this.props.turnOffIntro();
                            // this.adjustShadow('0px 28px 27px 3px rgba(0,0,0,0.75)');

                        }
                    }
                    >
                    Projects
            </Link>
                <Link
                    activeClass="active"
                    to="AboutMe"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={
                        (ggg) => {
                            console.log(`link was pressed: ${ggg}`);
                            this.adjustShadow('0px 28px 27px 3px rgba(0,0,0,0.75)');
                            //    this.adjustShadow('0px 11px 119px -14px rgba(0,0,0,1)');
                        }
                    }
                >
                    About me
            </Link>
            </div>
        );
    }

    BootstrapNavBar = () => (
        <Navbar
            sticky="top"/* change to fixed="top" when nav not in view */
            bg="light"
            variant="light"
            expand="lg"
        >
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
            </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

    render() {
        console.log(this.state.navColor);

        return (
            <nav className="navbar-container" style={{ "background-color": this.state.navColor, "box-shadow": this.state.boxShadow }}>
                {this.menu()}

                <div className="profileLink-container">
                    <FaGithub onClick={() => window.location.href = "https://github.com/reubenvas/"}/>
                    <IoIosMail onClick={() => window.location.href = "mailto: reuben.vas@hotmail.com"}/>
                    <FaLinkedinIn onClick={() => window.location.href = "https://www.linkedin.com/in/reuben-vas/"}/>
                </div>
            </nav>
        );

    }
}

export default NavigationBar;