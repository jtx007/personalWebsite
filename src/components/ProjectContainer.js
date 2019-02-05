import React, { Component } from 'react';
import connosieurgif from '../connosieurgif.gif'
import blitzgif from '../blitz.gif'
export default class ProjectContainer extends Component {
    render() {
        return (
            <div className="projects animated fadeInUpBig delay-2s">
                    <h1>My Projects</h1>
                    <div className="project-description">
                        <p>Here are some of my recent projects that I have worked on, feel free to check them out. </p>
                    </div>
                    <div className="project-container">
                        <div className="project animated flipInY delay-3s">
                            <h1>Connosieur</h1>
                                <a href="https://connosieurfrontend.herokuapp.com/"><img className="project-picture" alt="demopic" src={connosieurgif}/></a>
                            <br/>
                            <p> A web application for sneaker enthusiasts to gather and talk about all things sneaker related as well as show off their personal owns and wants. Built with <strong>React.js</strong> and <strong> Ruby on Rails</strong>, for frontend and backend respectively. Used a web scraper wrapped in Node to obtain sneaker data.</p>
                            <p><strong><a href="https://github.com/jtx007/ConnosieurFrontEnd">Github</a> | <a href="https://connosieurfrontend.herokuapp.com/">Live</a></strong></p>
                            
                        </div>
                        <div className="project animated flipInY delay-4s">
                            <h1>Blitz</h1>
                        <a href="https://blitzweatherapp.herokuapp.com/"><img className="project-picture" alt="demopic" src={blitzgif} /></a>
                            <p>A weather widget created with <strong>React.js</strong> and <strong>Node.js</strong> with <strong>Express</strong>. Used MapQuest geocoder API to convert physical locations into lat/lng coordinates. Used said coordinates for the DarkSky API to obtain relevant weather data to be rendered to the client</p>
                            <p><strong><a href="https://github.com/jtx007/BlitzWeatherApp">Github</a> | <a href="https://blitzweatherapp.herokuapp.com/">Live</a></strong></p>
                            
                        </div>
                        <div className="project animated flipInY delay-5s">
                            <h1>Coming Soon</h1>
                        </div>
                    </div>
                </div>
        )
    }
}