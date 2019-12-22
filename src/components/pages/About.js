import React from "react";
import "./About.scss";
import LocationCard from "./about/LocationCard";
import OpenHoursCard from "./about/OpenHoursCard";
import ContactCard from "./about/ContactCard";
import InfoCard from "./about/InfoCard";
import HeadlineCard from "./about/HeadlineCard";
import TaglineCard from "./about/TaglineCard";
import GalleryCard from "./about/GalleryCard";
import PictureCard from "./about/PictureCard";

const About = props => {
  const {
    headline,
    info,
    openHours,
    contact,
    tagline,
    showcase,
    gallery,
    location
  } = props.data;
  return (
    <div className="About">
      <PictureCard data={showcase} />
      <HeadlineCard data={headline} />
      <InfoCard data={info} />
      <TaglineCard data={tagline} />
      <GalleryCard data={gallery} />
      <LocationCard data={location} />
      <OpenHoursCard data={openHours} />
      <ContactCard data={contact} />
    </div>
  );
};

export default About;
