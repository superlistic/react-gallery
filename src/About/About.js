import React from 'react';
import json from './About.json';
import '../main.css';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">{json.title}</h1>
      <img className="about__image" src={json.picture} alt="boardmeeting" />
      <p className="about__description">{json.description}</p>
    </div>
  );
};

export default About;
