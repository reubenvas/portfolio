import React, { Component } from 'react';
import './App.css';

import FullScreenText from './components/FullScreenText';
import NavigationBar from './components/NavigationBar';
import AboutMe from './components/AboutMe';
import Project from './components/Project';

class App extends Component {


  componentDidMount = () => {

    // animateScroll.scrollToTop();
    // animateScroll.scrollToBottom();
  }

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <header className="App-header">
          <div >
            <FullScreenText>Hi! #My name is Reuben. #I'm a Fullstack JavaScript Developer!</FullScreenText>
          </div>
          <div className='Home' /* set either class or name to target of link */>
            <p className='intro'>I design & build digital products.</p>
            <small className='name'>Reuben Vas</small>
          </div>
          <AboutMe />
          <div className="Projects">
            <h1>My Projects</h1>
            <div className="container">
              <Project />
              <Project />
              <Project />
            </div>
          </div>
          <FullScreenText className='Projects' invertColor={true}>Projects-mock</FullScreenText>

        </header>
      </div>
    );
  }
}

export default App;
