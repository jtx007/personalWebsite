import React, { Component } from 'react';
import avatar from '../avatar.png'


export default class FirstComponent extends Component {
    render () {
        return (
        <div>
            
                <div className="top-container">
                    <img className="avatar" src={avatar} alt="avatar" />
                    <h1>James Thomas</h1>
                    <h2>Software Engineer | Full Stack Web Developer</h2>
                    <div className="intro-blurb">
                        <p>After working at a reputable tech company, I was introduced to programming and have been hooked ever since. I enjoy working in React.js and Ruby on Rails and building user intuitive applications. I hope that the work I do can impact communities in a positive way. My strongest trait is empathy. I hope to be able to understand people of different demographics in a tech-driven world.</p>
                    </div>
                </div>
                
                
            
        </div>

        )
}
}