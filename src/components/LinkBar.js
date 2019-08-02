import React, { Component } from 'react';


export default class LinkBar extends Component {

   

    



    render () {
        return (
            <nav className="link-bar"> 
                <a href="#about-me" className="nav-link">About</a>
                <a href="#all-projects" className="nav-link">Work</a>
                <a href="mailto:jamesjacobthomas7@gmail.com" className="nav-link">Contact</a>

                <button className="button-link"><a href="https://drive.google.com/file/d/1iJhAWA2dwN9QEV8WNMiKsUxuuS07_1n3/view">Resume</a></button>
            </nav>
        )
    }
}