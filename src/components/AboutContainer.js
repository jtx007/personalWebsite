import React, { Component } from 'react'
import SkillsContainer from './SkillsContainer'
export default class AboutContainer extends Component {
    render () {
        return (
            <div className="about-and-portrait-container">
                    < div className = "aboutskills-container animated fadeInLeft delay-1s" >
                            <h2>About Me</h2>
                        <div className="about-me-blurb">
                            <p>Gamer, Fashion Enthusiast, and coder.  After working at a reputable tech company,  I got exposure to programming and have been hooked since. I learned full stack web development at Flatiron School's Software Engineering Intensive.  Here's my skillset.</p>
                        </div>
                        <SkillsContainer/>
                    </div>
                    <div className="self-portrait-container animated fadeInRight delay-1s">
                    </div>
            </div>
        )
    }
}