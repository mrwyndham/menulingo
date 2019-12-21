import React from "react";
import "./About.scss";
import Map from "./about/MapContainer";
import OpenHours from "./about/OpenHours";
import ContactCard from "./about/ContactCard";

const About = props => {
  const { backgroundColor, openline } = props.style;
  const { title, tagline, openHours, description, contact } = props.data;
  return (
    <div className="About">
      <div className="About--Showcase">
        <img
          className="About--Image"
          src="https://dummyimage.com/2560x1600/000000/ffffff.png"
          alt=""
        />
      </div>
      <section
        className="About--Introduction"
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <p
          className="About--Title"
          style={{
            fontFamily: `${openline.font}`,
            color: `${openline.color}`
          }}
        >
          {title}
        </p>
      </section>
      <section className="About--Description">
        <h2
          className="About--TagLine"
          style={{
            fontFamily: `${props.style.tagline.font}`,
            fontSize: `${props.style.tagline.size}`,
            color: `${props.style.tagline.color}`
          }}
        >
          {tagline}
        </h2>
        <p
          style={{
            fontFamily: `${""}`,
            fontSize: `${""}`,
            color: `${props.style.tagline.color}`
          }}
        >
          {description}
        </p>
      </section>
      <OpenHours data={openHours} />
      <ContactCard data={contact} style={""} />
      <section className="About--Map">
        <div className="Map__Responsive">
          <Map />
        </div>
      </section>
    </div>
  );
};

export default About;
