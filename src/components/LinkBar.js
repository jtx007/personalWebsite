import React, { Component } from 'react';


export default class LinkBar extends Component {

    scrollToAbout = (event) => {
        console.log(event)
        window.scrollTo({top: 100,
            left: 100,
            behavior: 'smooth'})
    }

    



    render () {
        return (
            <nav className={`link-bar ${this.props.shadowClass ? "shadow": null}`}> 
                <p onClick={this.scrollToAbout} className="nav-link">About</p>
                <p className="nav-link">Work</p>
                <p className="nav-link">Contact</p>

                <button className="button-link"><a href="https://drive.google.com/file/d/1iJhAWA2dwN9QEV8WNMiKsUxuuS07_1n3/view">Resume</a></button>
            </nav>
        )
    }
}