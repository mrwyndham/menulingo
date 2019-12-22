import React from "react";

const ContactCard = props => {
  const componentStyle = {
    backgroundColor: "black",
    padding: "10vh 4vh",
    paddingBottom: "26vh",
    fontSize: "3vh",
    fontWeight: "400",
    color: "#ffffff",
    title: {
      color: "#ffffff",
      paddingBottom: "3vh",
      fontSize: "4vh"
    },
    address: {
      padding: "0 6vh"
    },
    phone: {
      color: "#ffffff",
      paddingBottom: "2vh"
    },
    email: {
      color: "#ffffff"
    },
    socials: {
      fill: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      social: {
        maxWidth: "100px",
        width: "4vh",
        margin: "4vh 3vw 0 3vh"
      }
    }
  };
  const { phone, email, socials } = props.data;
  const renderedSocials = socials.map((social, index) => (
    <div key={index} style={componentStyle.socials.social}>
      <a href={social.url}>{social.icon}</a>
    </div>
  ));
  return (
    <div style={componentStyle}>
      <div style={componentStyle.phone}>
        <a href={`tel:${phone}`}>
          <div>{phone}</div>
        </a>
      </div>
      <div style={componentStyle.email}>
        <a href={`mailto:${email}`}>
          <div>{email}</div>
        </a>
      </div>
      <div style={componentStyle.socials}>{renderedSocials}</div>
    </div>
  );
};

export default ContactCard;
