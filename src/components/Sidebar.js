import React from 'react';
import githubicon from '../githubMarkLight32px.png'
import linkedinicon from '../linkedin.png'
import mediumicon from '../monogram.png'

const Sidebar = () => {
    return (
        <nav className="sidebar">
            
            <a href="https://github.com/jtx007"><img className="sidebar-icon" alt="github-icon" src={githubicon} /></a>
            <a href="https://www.linkedin.com/in/james-thomas007/"><img alt="linkedin-icon" className="sidebar-icon" src={linkedinicon} /></a>
            <a href = "https://medium.com/@jamesjacobthomas7"><img className="sidebar-icon" alt="medium-icon" src={mediumicon} /></a>
            <div className="vertical">
                
            </div>
        </nav>
    )
}

export default Sidebar