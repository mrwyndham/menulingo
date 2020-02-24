import React from "react";
import "./About.scss";
import { connect } from "react-redux";
import LocationCard from "./about/LocationCard";
import OpenHoursCard from "./about/OpenHoursCard";
import ContactCard from "./about/ContactCard";
import InfoCard from "./about/InfoCard";
import HeadlineCard from "./about/HeadlineCard";
import TaglineCard from "./about/TaglineCard";
import GalleryCard from "./about/GalleryCard";
import PictureCard from "./about/PictureCard";
import { setLanguage } from "../../redux/actions/menuActions";

const About = ({ menu: { language, menu }, setLanguage }) => {
  const handleTranslate = (reduxLang, translatedMenus, objectT1) => {
    const URL = `${decodeURI(window.location.href)}`.split("/");
    const cleanURL = URL.filter(e => e !== "");
    const segmentLang = cleanURL[2];
    const urltoObjectLocation = {};
    console.log(reduxLang);
    for (const lIndex in translatedMenus) {
      const languageName = translatedMenus[lIndex].language.toLowerCase();
      if (languageName === reduxLang) {
        urltoObjectLocation["l"] = lIndex;
        break;
      } else {
        if (languageName === segmentLang) {
          setLanguage(segmentLang);
          if (!urltoObjectLocation["l"]) {
            urltoObjectLocation["l"] = lIndex;
          }
        }
      }
    }
    return translatedMenus[urltoObjectLocation.l][objectT1];
  };

  const handleAbout = handleTranslate(
    language,
    menu.data.translatedMenus,
    "about"
  )[0];
  return (
    <div className="About">
      <PictureCard data={handleAbout.feature} />
      <HeadlineCard data={handleAbout.headline} />
      <InfoCard data={handleAbout.info} />
      {/* <TaglineCard data={propstagline} /> */}
      <GalleryCard data={handleAbout.gallery} />
      <LocationCard data={handleAbout.location} />
      <OpenHoursCard data={handleAbout.openhours} />
      <ContactCard data={handleAbout.contact} />
    </div>
  );
};

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps, { setLanguage })(About);
