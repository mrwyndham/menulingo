import React from "react";
import "./About.scss";
import MapCard from "./about/MapCard";
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
    gallery
  } = props.data;
  return (
    <div className="About">
      <PictureCard data={showcase} />
      <HeadlineCard data={headline} />
      <InfoCard data={info} />
      <TaglineCard data={tagline} />
      <PictureCard data={showcase} />
      <OpenHoursCard data={openHours} />
      <ContactCard data={contact} />
      <MapCard />
      <GalleryCard data={gallery} />
    </div>
  );
};

export default About;
