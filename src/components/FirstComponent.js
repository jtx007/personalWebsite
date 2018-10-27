import React, { Component } from 'react';
import avatar from '../avatar.png'

export default class FirstComponent extends Component {
    render () {
        return (
            <div className="outter-most-div">
                <div className="top-home-div">
                    <img className="avatar" src={avatar}/>
                    <p>James Thomas</p>
                    <p>Software Engineer | Full Stack Developer</p>
                <div className="second-level-div">
                    <p>Projects</p>
                </div>
                </div>
            </div>
        )
    }
}