import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

import { Link } from 'react-scroll';

import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";


const NavigationBar = () => {
    const appNavbar = (
        <nav className="navbar-container" style={{ "background-color": "red" }}>
            <div className="link-container">
                <Link
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={
                        (ggg) => {
                            // make the top navbart change color to its background
                            console.log(`link was pressed: ${ggg}`)
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
                        (ggg) => console.log(`link was pressed: ${ggg}`)
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
                        (ggg) => console.log(`link was pressed: ${ggg}`)
                    }
                >
                    About me
                </Link>
            </div>
            <div className="profileLink-container">
                <FaGithub/>
                <IoIosMail />
                <FaLinkedinIn />
            </div>
        </nav>
    );

    const BootstrapNavBar = () => (
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

    return (
        appNavbar
    );
}

export default NavigationBar;