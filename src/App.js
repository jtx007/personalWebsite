import React, { Component } from 'react';

import FirstComponent from './components/FirstComponent'
import AboutContainer from './components/AboutContainer.js'
import LinkBar from './components/LinkBar'
import ProjectContainer from'./components/ProjectContainer'
import './App.css';

class App extends Component {




  render() {
    return (
      <div>
        <LinkBar/>
        <div class="site-layout">
          <FirstComponent/>
          <AboutContainer/>
          <ProjectContainer/>
        </div>
      </div>
      
    )
  }
}

export default App