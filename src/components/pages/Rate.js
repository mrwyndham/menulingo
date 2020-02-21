import React, { Fragment, useState } from "react";
import RatingSlider from "./rate/RateSlider";
import "./Rate.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setLanguage } from "../../redux/actions/menuActions";

const Rate = ({ style, data, menu: { language, menu } }) => {
  const [ratings, setRatings] = useState([]);
  const handleRate = rateEvent => {
    let buildArray = ratings;
    let index = buildArray.findIndex(x => x.catagory === rateEvent.catagory);
    index === -1
      ? buildArray.push(rateEvent)
      : buildArray.splice(index, 1, rateEvent);
    setRatings(buildArray);
    console.log(ratings);
  };

  const handleTranslate = (reduxLang, translatedMenus, objectT1) => {
    const URL = `${decodeURI(window.location.href)}`.split("/");
    const cleanURL = URL.filter(e => e !== "");
    const segmentLang = cleanURL[2];
    const urltoObjectLocation = {};
    for (const lIndex in translatedMenus) {
      const languageName = translatedMenus[lIndex].language.toLowerCase();
      if (languageName === reduxLang) {
        urltoObjectLocation["l"] = lIndex;
      } else if (languageName === segmentLang) {
        if (!urltoObjectLocation["l"]) {
          urltoObjectLocation["l"] = lIndex;
        }
      }
    }
    return translatedMenus[urltoObjectLocation.l][objectT1];
  };

  const handleSubmit = e => {
    alert("The form was submitted");
    e.preventDefault();
  };
  const renderRatings = handleTranslate(
    language,
    menu.data.translatedMenus,
    "evaluation"
  ).map((rating, index) => (
    <Fragment key={index}>
      <div htmlFor="" className="Rate--Labels" style={style.slider.label}>
        {rating.header}
      </div>
      <RatingSlider handleRate={handleRate} catagory={rating.header} />
    </Fragment>
  ));
  return (
    <form onSubmit={handleSubmit} className="Rate" style={style}>
      <div className="Rate--Sliders">{renderRatings}</div>
      <input
        className="Button--Primary__Sm__Red"
        type="submit"
        value="Submit"
        style={style.button}
      />
    </form>
  );
};

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps, { setLanguage })(Rate);

Rate.propTypes = {
  data: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired
};
