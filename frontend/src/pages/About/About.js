import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                    This is an realtime AI based Yoga Trainer which detects your pose how well you are doing.
                    We created this as a team project for learning and improving AI from this project.
                    This is an open source project, The code is available on the GitHub - <a href="https://github.com/Dikxha/Yogik">https://github.com/Dikxha/Yogik</a>
                    
                    This AI first predicts keypoints or coordinates of different parts of the body(basically where
                    they are present in an image) and then it use another classification model to classify the poses if 
                    someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are 
                    doing correctly(by making virtual skeleton green). We have used Tensorflow pretrained Movenet Model To Predict the 
                    Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.

                    We have trained the model in python because of tensorflowJS we can leverage the support of browser so we converted 
                    the keras/tensorflow model to tensorflowJS.
                </p>
                <div className="developer-info">
                    <h4>Team Yogik</h4>
                    
                </div>
            </div>
        </div>
    )
}
