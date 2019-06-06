import React from 'react';

import Drawer from './Drawer';
import NavigationBar from './NavigationBar';

class Menu extends React.Component {
    state = {
        isMobile: false,
    }

    static getDerivedStateFromProps(props, state) {
        if (props.isMobile) {
            return {isMobile: true};
        }
        return {};
    }

    componentDidMount() {
        if (this.state.isMobile) {
            this.props.turnOffIntro();
        }
    }

    render() {
        return (
            <nav className='navbar-container'>
                {this.state.isMobile ? <Drawer /> : <NavigationBar turnOffIntro={this.props.turnOffIntro} />}
            </nav>
        );
    }
}

export default Menu;