import React, { Component } from 'react';
import './App.css';

import Cookies from 'universal-cookie';

import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Project from './components/Project';

import preggy from './images/preggy.png';
import park_away from './images/park_away.PNG';
import todo from './images/todo.PNG';


import Menu from './components/Menu';

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

  isMobileView = () => window.innerWidth < 830 ? true : false;

  render() {



    return (
      <main className="App">
        {this.isFirstTimeVisit() && this.state.intro && <Intro />}
        <div className='Home' /* set either class or name to target of link */>
          <div className='home-picture'>
            <article className='text--home'>
              <p className='intro'>I design & build digital solutions.</p>
              <p className='name'>Reuben Vas</p>
            </article>
          </div>
        </div>
        <div className='space' />
        <Menu
          isMobile={this.isMobileView()}
          turnOffIntro={this.removeIntro}
        />
        <div className='space' />
        <AboutMe />
        <div className="Projects">
          <h1>Latest Works</h1>
          <div className="projects-container">
            <Project
              name="Park Away"
              picture={park_away}
              siteLink='https://park-easy-app.herokuapp.com/' // since this is heroku it needs to wake up every hour
              codeLink='https://github.com/reubenvas/Parking-App'
              description="Extraordinary login- and logout app for parking."
            />
            <Project
              name="Preggy"
              picture={preggy}
              codeLink='https://github.com/reubenvas/Preggy'
              description="Sensational ios- and android app for following your pregnancy."
            />
            <Project
              name="Todo App"
              picture={todo}
              siteLink=''
              codeLink='https://github.com/reubenvas/Todo-app'
              description="Incredible todo app with unique UI"
            />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
