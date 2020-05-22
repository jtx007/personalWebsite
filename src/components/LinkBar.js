import React, { Component } from 'react';

export default class LinkBar extends Component {


    



    render () {
        return (
          <nav className="link-bar">
            <a href="#about-me" className="nav-link">
              About
            </a>
            <a href="#all-projects" className="nav-link">
              Work
            </a>
            <a href="mailto:jamesjacobthomas7@gmail.com" className="nav-link">
              Contact
            </a>

            
              <a className="nav-link"  href="https://drive.google.com/file/d/1x3HuLnUCiB9WYrRRo-hy9ZddkvWkJSKp/view?usp=sharing">
                Resume
              </a>
          </nav>
        );
    }
}