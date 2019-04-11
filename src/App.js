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
      <main className="App">
        <NavigationBar />
        <FullScreenText className='Intro'>Hi! #My name is Reuben. #I'm a Fullstack JavaScript Developer!</FullScreenText>
        <div className='Home' /* set either class or name to target of link */>
          <div className='bg-landscape' />
          <article className='text--home'>
            <p className='intro'>I design & build digital products.</p>
            <p className='name'>Reuben Vas</p>
          </article>
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
      </main>
    );
  }
}

export default App;
