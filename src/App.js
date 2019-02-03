import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FirstComponent from './components/FirstComponent'
import AboutContainer from './components/AboutContainer.js'
import LinkBar from './components/LinkBar'
import ProjectContainer from'./components/ProjectContainer'
import './App.css';

class App extends Component {

  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollTop = 0
  }
  render() {
    return (
      <div>
        <LinkBar/>
        <FirstComponent/>
        <AboutContainer/>
        <ProjectContainer/>
      </div>
      
    )
  }
}

export default App