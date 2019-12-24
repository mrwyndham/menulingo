import React from "react";

const OpenHoursCard = props => {
  const { title, table } = props.data;
  const componentStyle = {
    backgroundColor: "#ffffff",
    padding: "0vh 4vh 10vh 4vh",
    fontSize: "2.5vh",
    fontWeight: "800",
    title: {
      fontSize: "3.5vh",
      paddingBottom: "3vh"
    },
    table: {
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "left",
      borderSpacing: "2vh 2vh"
    }
  };
  const renderedRows = table.map((row, index) => (
    <tr key={index}>
      <td>{row.day}</td>
      <td>{row.time}</td>
    </tr>
  ));
  return (
    <section style={componentStyle}>
      <h1 style={componentStyle.title}>{title}</h1>
      <table style={componentStyle.table}>
        <tbody>{renderedRows}</tbody>
      </table>
    </section>
  );
};

export default OpenHoursCard;
