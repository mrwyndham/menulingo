import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="About">
      <div className="About--ImageWrapper">
        <img
          className="About--Image"
          src="https://images.unsplash.com/photo-1460400508371-ab23b340c3e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk5NTE5fQ"
          alt=""
        />
      </div>
      <h1 className="About--Title">PYSCO</h1>
      <div className="About--Description">
        Mas não seria dubstep privado você deve me enviar uma mensagem sobre
        qualquer tópico da NPR.
      </div>
      <div className="About--Contact"></div>
    </div>
  );
};

export default About;
