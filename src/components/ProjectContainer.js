import React, { Component } from 'react';
import connosieurgif from '../connosieurgif.gif'
import blitzgif from '../blitz.gif'
export default class ProjectContainer extends Component {
    render() {
        return (
            <div className="projects-header">
                    <h1 className="header">Things I built <span className="title-line">⎯⎯⎯⎯⎯⎯⎯</span></h1>

                            <div className="projects-blurb">
                                <p>Here are some of my recent projects that I have worked on, feel free to check them out. </p>
                            </div>
                            <div className="project-container">
                                <div className="project">
                                    <h1 className="header-for-project">Connosieur</h1>
                                        <a href="https://connosieurfrontend.herokuapp.com/"><img className="project-picture" alt="demopic" src={connosieurgif}/></a>
                                    <br/>
                                    <div className="project-description">
                                        <p> A web application for sneaker enthusiasts to gather and talk about all things sneaker related as well as show off their personal owns and wants. Built with <strong>React.js</strong> and <strong> Ruby on Rails</strong>, for frontend and backend respectively. Used a web scraper wrapped in Node to obtain sneaker data.</p>
                                        <p><strong><a href="https://www.youtube.com/watch?v=PVA6Xyg6c74&t">Video Demo</a> | <a href="https://github.com/jtx007/ConnosieurFrontEnd">Github</a> | <a href="https://connosieurfrontend.herokuapp.com/">Live</a></strong></p>
                                    </div>
                                </div>
                                <div className="project">
                                    <h1 className="header-for-project">Blitz</h1>
                                <a href="https://blitzweatherapp.herokuapp.com/"><img className="project-picture" alt="demopic" src={blitzgif} /></a>
                                    <div className="project-description">
                                        <p>A weather widget created with <strong>React.js</strong> and <strong>Node.js</strong> with <strong>Express</strong>. Used MapQuest geocoder API to convert physical locations into lat/lng coordinates. Used said coordinates for the DarkSky API to obtain relevant weather data to be rendered to the client</p>
                                        <p><strong><a href="https://www.youtube.com/watch?v=e5FhkyYptFE">Video Demo</a> | <a href="https://github.com/jtx007/BlitzWeatherApp">Github</a> | <a href="https://blitzweatherapp.herokuapp.com/">Live</a></strong></p>    
                                    </div>
                                </div>
                            </div>
                </div>
        )
    }
}