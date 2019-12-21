import React from "react";

const ContactCard = props => {
  const componentStyle = {
    backgroundColor: "black",
    padding: "9vh 4vh",
    fontSize: "2.75vh",
    title: {
      color: "#ffffff",
      paddingBottom: "3vh",
      fontSize: "5vh"
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
        maxWidth: "40px",
        width: "8vw",
        margin: "4vh 2vw 0 2vh"
      }
    }
  };
  const { title, phone, email, socials } = props.data;
  const renderedSocials = socials.map((social, index) => (
    <div key={index} style={componentStyle.socials.social}>
      <a href={social.url}>{social.icon}</a>
    </div>
  ));
  return (
    <div style={componentStyle}>
      <h1 style={componentStyle.title}>{title}</h1>
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
