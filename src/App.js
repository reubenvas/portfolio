import React, { Component } from 'react';
import './App.css';



import FullScreenText from './components/FullScreenText';
import NavigationBar from './components/NavigationBar';
import AboutMe from './components/AboutMe';
import Project from './components/Project';


class App extends Component {
  // fix so that the user by default visits intro page on refresh
  state = {
    intro: true,
  }

  removeIntro = () => {
    this.setState({ intro: false });
  }

  render() {

    const Intro = () => {
      if (this.state.intro) {
        return (
          <FullScreenText className='Intro'>Hi! #My name is Reuben. #I'm a Fullstack JavaScript Developer!</FullScreenText>
        );
      }
      return '';
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
        <NavigationBar turnOffIntro={this.removeIntro}/>
        <div className='space' />
        <AboutMe />
        <div className="Projects">
          <h1>My Projects</h1>
          <div className="container">
            <Project />
            <Project />
            <Project />
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
