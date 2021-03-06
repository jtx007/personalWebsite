import React, { Component } from 'react'
import SkillsContainer from './SkillsContainer'

export default class AboutContainer extends Component {
     
    render () {
        return (
            

            < div className ="aboutskills-container">
                <div>
                    < h2 className = "header"> About Me <span className="title-line">⎯⎯⎯⎯⎯⎯⎯</span></h2>
                <div className="about-paragraph">
                    <p>Hi there! I'm James and I am a Software Engineer based in NYC who enjoys building things on the web. I develop websites and web applications that are fluid, responsive, and fun to look at. Here are the technologies that I've been working in:</p>
                </div>
                    <SkillsContainer/>
                </div>
                
            </div>
        )
    }
}