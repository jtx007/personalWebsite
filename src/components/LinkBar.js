import React, { Component } from 'react';
import githubicon from '../githubicon.png'
import linkedinicon from '../linkedinicon.png'
import mediumicon from '../mediumicon.png'

export default class LinkBar extends Component {
    render () {
        return (
            <div className="link-bar animated fadeInDownBig delay-1s"> 
                <div className="icon-link">
                    <a href="https://github.com/jtx007"><img className="icon-img" alt="github" src={githubicon}/>
                    <p className="nav-icon-title">Github</p></a>
                </div>
                <div className="icon-link">
                    <a href="https://medium.com/@jamesjacobthomas7"><img className="icon-img" alt="Medium" src={mediumicon} />
                    <p className="nav-icon-title">Medium</p></a>
                </div>
                <div className="icon-link">
                    <a href="https://www.linkedin.com/in/james-thomas007/"><img className="icon-img" alt="Linkedin" src={linkedinicon} />
                    <p className="nav-icon-title">Linkedin</p></a>
                </div>
            </div>
        )
    }
}