import React, { Component } from 'react';
import githubicon from '../githubicon.png'
import linkedinicon from '../linkedinicon.png'
import mediumicon from '../mediumicon.png'

export default class LinkBar extends Component {
    render () {
        return (
            <div className="link-bar"> 
                <a href="https://github.com/jtx007"><img className="github-icon" alt="github" src={githubicon} /></a>
                <a href="https://medium.com/@jamesjacobthomas7"><img className="medium-icon" alt="Medium" src={mediumicon} /></a>
                <a href="https://www.linkedin.com/in/james-thomas007/"><img className="linkedin-icon" alt="Linkedin" src={linkedinicon} /></a>
            </div>
        )
    }
}