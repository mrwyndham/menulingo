import React from "react";
import "./About.scss";
import Map from "./about/MapContainer";
import OpenHours from "./about/OpenHours";
import ContactCard from "./about/ContactCard";
import InfoCard from "./about/InfoCard";
import HeadlineCard from "./about/HeadlineCard";

const About = props => {
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
      <HeadlineCard data={title} />
      <InfoCard data={{ description, tagline }} />
      <OpenHours data={openHours} />
      <ContactCard data={contact} />
      <section className="About--Map">
        <div className="Map__Responsive">
          <Map />
        </div>
      </section>
    </div>
  );
};

export default About;
