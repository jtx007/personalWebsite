import React, { Component } from 'react';
import avatar from '../avatar.png'
import githubicon from '../githubicon.png'
import linkedinicon from '../linkedinicon.png'
import mediumicon from '../mediumicon.png'

export default class FirstComponent extends Component {
    render () {
        return (
        <div>
            <div className="link-bar"> 
                <a href="https://github.com/jtx007"><img className="github-icon" alt="github" src={githubicon} /></a>
                <a href="https://medium.com/@jamesjacobthomas7"><img className="medium-icon" alt="Medium" src={mediumicon} /></a>
                <a href="https://www.linkedin.com/in/james-thomas007/"><img className="linkedin-icon" alt="Linkedin" src={linkedinicon} /></a>
            </div>
                <div className="top-container">
                    <img className="avatar" src={avatar} alt="avatar" />
                    <h1>James Thomas</h1>
                    <h2>Software Engineer | Full Stack Web Developer</h2>
                    <div className="intro-blurb">
                        <p>Lorem ipsum dolor amet offal ramps vice meh single-origin coffee. Chartreuse lo-fi pinterest farm-to-table literally pop-up. Chicharrones pour-over glossier cronut fingerstache, drinking vinegar hell of. Fingerstache bushwick skateboard ennui, cornhole hella post-ironic activated charcoal lomo 3 wolf moon whatever.</p>
                    </div>
                </div>
                <div className="about-and-portrait-container">
                    <div className="aboutskills-container">
                            <h2>About Me</h2>
                        <div className="about-me-blurb">
                            <p>Lorem ipsum dolor amet offal ramps vice meh single-origin coffee. Chartreuse lo-fi pinterest farm-to-table literally pop-up. Chicharrones pour-over glossier cronut fingerstache, drinking vinegar hell of. Fingerstache bushwick skateboard ennui, cornhole hella post-ironic activated charcoal lomo 3 wolf moon whatever.</p>
                        </div>
                
                    </div>
                    <div className="self-portrait">
                    <h2>some picture of me</h2>
                    </div>
                </div>
                <div className="projects-container">
                    
                    <div className="project">
                        <p>Project 1</p>
                    </div>
                    <div className="project">
                        <p>Project 2</p>
                    </div>
                    <div className="project">
                        <p>Project 3</p>
                    </div>
                </div>
            
        </div>

        )
}
}