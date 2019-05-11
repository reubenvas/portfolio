import React, { Component } from 'react';
import './App.css';

import Cookies from 'universal-cookie';

import FullScreenText from './components/FullScreenText';
import NavigationBar from './components/NavigationBar';
import AboutMe from './components/AboutMe';
import Project from './components/Project';

import preggy from './images/preggy.png';
import park_away from './images/park_away.PNG';


class App extends Component {
  state = {
    intro: true,
  }

  removeIntro = () => {
    this.setState({ intro: false });
  }

  isFirstTimeVisit = () => {
    const cookies = new Cookies();

    if (!cookies.get('welcome')) {

      const date = (new Date()).toLocaleDateString();
      cookies.set('welcome', date, { path: '/' });
      return true;
    }

    return false;
  }

  render() {

    const Intro = () => {
      if (this.isFirstTimeVisit() && this.state.intro) {
        return (
          <FullScreenText className='Intro'>Hi! #My name is Reuben. #I'm a Fullstack JavaScript Developer!</FullScreenText>
        );
      }
      window.document.body.style.overflowY = 'visible';
      return <div />;
    }

    return (
      <main className="App">
        <Intro />
        <div className='Home' /* set either class or name to target of link */>
          <div className='home-picture'>
            <article className='text--home'>
              <p className='intro'>I design & build digital solutions.</p>
              <p className='name'>Reuben Vas</p>
            </article>
          </div>
        </div>
        <div className='space' />
        <NavigationBar turnOffIntro={this.removeIntro} />
        <div className='space' />
        <AboutMe />
        <div className="Projects">
          <h1>Latest Works</h1>
          <div className="projects-container">
            <Project
              name="Park Away"
              picture={park_away}
              siteLink='#'
              codeLink='https://github.com/reubenvas/Parking-App'
              description="Extraordinary login- and logout app for parking."
            />
            <Project
              name="Preggy"
              picture={preggy}
              siteLink='#'
              codeLink='https://github.com/reubenvas/Preggy'
              description="Sensational ios- and android app for following your pregnancy."
            />
            <Project
              name="Project-Name"
              picture='#'
              siteLink='#'
              codeLink='#'
              description="Project-Description"
            />
          </div>
        </div>
        <footer>
          <p>this is a footer</p>
        </footer>
      </main>
    );
  }
}

export default App;
