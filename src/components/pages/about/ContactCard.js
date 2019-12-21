import React from "react";

const ContactCard = props => {
  const style = {
    backgroundColor: "black",
    padding: "9vh 4vh",
    fontSize: "2.75vh",
    title: {
      color: "#ffffff",
      paddingBottom: "3vh",
      fontSize: "5vh"
    },
    phone: {
      color: "#ffffff"
    },
    email: {
      color: "#ffffff",
      paddingBottom: "2vh"
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
  const {} = props.style;
  const { c2a, title, phone, email, socials } = props.data;
  const renderedSocials = socials.map(social => (
    <div style={style.socials.social}>{social}</div>
  ));
  return (
    <div style={style}>
      <h1 style={style.title}>{title}</h1>
      <div style={style.email}>
        <a href={`tel:${phone}`}>
          <div>{phone}</div>
        </a>
      </div>
      <div style={style.phone}>
        <a href={`mailto:${email}`}>
          <div>{email}</div>
        </a>
      </div>
      <div style={style.socials}>{renderedSocials}</div>
    </div>
  );
};

export default ContactCard;
