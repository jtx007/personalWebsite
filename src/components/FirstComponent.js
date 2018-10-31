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
                        <p>Lorem ipsum dolor amet offal ramps vice meh single-origin coffee. Chartreuse lo-fi pinterest farm-to-table literally pop-up. Chicharrones pour-over glossier cronut fingerstache, drinking vinegar hell of. Fingerstache bushwick skateboard ennui, cornhole hella post-ironic activated charcoal lomo 3 wolf moon whatever.</p>
                    </div>
                </div>
                
                
            
        </div>

        )
}
}