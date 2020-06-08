import React, { Component } from 'react';
import rubyicon from '../assets/rubyicon.png'
import railsicon from '../assets/railsicon.png'
import javascripticon from '../assets/javascripticon.png'
import reacticon from '../assets/reacticon.png'
import sassicon from '../assets/sassicon.png'
import htmlicon from '../assets/htmlicon.png'
import cssicon from '../assets/cssicon.png'
import herokuicon from '../assets/herokuicon.png'
import awsicon from '../assets/awsicon.png'
import pythonicon from '../assets/python.png'

export default class SkillsContainer extends Component {
    render () {
        return (
          <div className="skills-container">
            <figure>
              <img className="icon" alt="ruby" src={rubyicon} />
              <figcaption>Ruby</figcaption>
            </figure>
            <figure>
              <img className="icon" alt="rails" src={railsicon} />
              <figcaption>Ruby On Rails</figcaption>
            </figure>
            <figure>
              <img className="icon" alt="javascript" src={javascripticon} />
              <figcaption>JavaScript</figcaption>
            </figure>
            <figure>
              <img className="icon" alt="react" src={reacticon} />
              <figcaption>React.js</figcaption>
            </figure>
            <figure>
              <img className="icon" alt="sass" src={sassicon} />
              <figcaption>SASS</figcaption>
            </figure>
            <figure>
              <img className="icon" alt="html" src={htmlicon} />
              <figcaption>HTML</figcaption>
            </figure>
            <figure>
              <img className="icon" alt="css" src={cssicon} />
              <figcaption>CSS</figcaption>
            </figure>
            <figure>
              <img className="icon" alt="heroku" src={herokuicon} />
              <figcaption>Heroku</figcaption>
            </figure>
            <figure>
              <img className="icon" alt="aws" src={awsicon} />
              <figcaption>AWS</figcaption>
            </figure>
            <figure>
              <img className="icon" alt="python" src={pythonicon} />
              <figcaption>Python</figcaption>
            </figure>
          </div>
        );
    }
}