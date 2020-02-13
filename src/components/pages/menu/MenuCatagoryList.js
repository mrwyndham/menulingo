import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MenuCatagory from "./MenuCatagory";
import { connect } from "react-redux";

const MenuCatagoryList = ({
  data: { pic, name, description },
  menu: { language }
}) => {
  return (
    <Fragment>
      <Link
        to={{
          pathname: `/${language}/${name.toLowerCase()}/`
        }}
      >
        <MenuCatagory image={pic} name={name} description={description} />
      </Link>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps)(MenuCatagoryList);
