import React, { Component } from 'react'
import SkillsContainer from './SkillsContainer'

export default class AboutContainer extends Component {
    render () {
        return (
            <div className="about-and-portrait-container">
                    <div className="aboutskills-container">
                            <h2>About Me</h2>
                        <div className="about-me-blurb">
                            <p>Gamer, Fashion Enthusiast, and coder.  After working at a reputable tech company,  I got exposure to programming and have been hooked since. Here's my skillset.</p>
                        </div>
                        <SkillsContainer/>
                    </div>
                    <div className="self-portrait">
                    <h2>some picture of me</h2>
                    </div>
            </div>
        )
    }
}