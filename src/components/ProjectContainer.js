import React, { Component } from 'react';
import connosieur from '../connosieur.png'

export default class ProjectContainer extends Component {
    render() {
        return (
            <div className="projects animated fadeInUpBig delay-2s">
                    <h1>My Projects</h1>
                    <div className="project-description">
                        <p>Here are some of my recent projects that I have worked on, feel free to check them out. </p>
                    </div>
                    <div className="project-container">
                        <div className="project">
                            <p>Connosieur</p>
                                <img className="project-picture" alt="demopic" src={connosieur}/>
                            <br/>
                            <p> A web application for sneaker enthusiasts to gather and talk about all things sneaker related as well as show off their personal owns and wants</p>
                        </div>
                        <div className="project">
                            <p>Project 2</p>
                        </div>
                        <div className="project">
                            <p>Project 3</p>
                        </div>
                    </div>
                </div>
        )
    }
}