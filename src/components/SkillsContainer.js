import React, { Component } from 'react';
import rubyicon from '../rubyicon.png'
import railsicon from '../railsicon.png'
import javascripticon from '../javascripticon.png'
import reacticon from '../reacticon.png'
import sassicon from '../sassicon.png'
import htmlicon from '../htmlicon.png'
import cssicon from '../cssicon.png'
import herokuicon from '../herokuicon.png'
import awsicon from '../awsicon.png'

export default class SkillsContainer extends Component {
    render () {
        return (
            <div className="skills-container">
                <img className="icon" alt="ruby" src={rubyicon}/>
                <img className="icon" alt="rails" src={railsicon} />
                <img className="icon" alt="javascript" src={javascripticon}/>
                <img className="icon" alt="react" src={reacticon} />
                <img className="icon" alt="sass" src={sassicon} />
                <img className="icon" alt="html" src={htmlicon} />
                <img className="icon" alt="css" src={cssicon} />
                <img className="icon" alt="heroku" src={herokuicon} />
                <img className="icon" alt="aws" src={awsicon} />
            </div>
        )
    }
}