import React from 'react';


import { Link } from 'react-scroll';


const NavigationBar = () => {
    const appNavbar = (
        <nav style={{ position: 'fixed' }} className="navigation-container">
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
        </nav>
    );

    return (
        <div>
            {appNavbar}
        </div>
    );
}

export default NavigationBar;