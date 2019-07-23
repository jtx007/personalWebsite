import React, { Component } from 'react';


export default class LinkBar extends Component {

    

    



    render () {
        return (
            <nav className={`link-bar ${this.props.shadowClass ? "shadow": null}`}> 
                <a className="nav-link" href="#about-me-blurb">About</a>
                <a className="nav-link" href="#all-projects">Work</a>
                <a className="nav-link" href="mailto:jamesjacobthomas7@gmail.com">Contact</a>

                <button className="button-link"><a href="https://drive.google.com/file/d/1iJhAWA2dwN9QEV8WNMiKsUxuuS07_1n3/view">Resume</a></button>
            </nav>
        )
    }
}