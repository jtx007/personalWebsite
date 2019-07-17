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

  state = {
    addShadowClass: false
  }

  addShadowClass = () => {
    this.setState({
      addShadowClass: true
    })
  }


  render() {
    console.log(this.state.addShadowClass)
    return (
      <div onScroll={this.addShadowClass} >
        <LinkBar shadowClass={this.state.addShadowClass} />
        <FirstComponent/>
        <AboutContainer/>
        <ProjectContainer/>
      </div>
      
    )
  }
}

export default App