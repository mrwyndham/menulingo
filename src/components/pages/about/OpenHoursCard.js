import React from "react";

const OpenHoursCard = props => {
  const { title, table } = props.data;
  const componentStyle = {
    backgroundColor: "#ffffff",
    padding: "10vh 4vh",
    fontSize: "2.5vh",
    title: {
      fontSize: "5vh",
      paddingBottom: "3vh"
    },
    table: {
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      borderSpacing: "4vh 0.5vh"
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
