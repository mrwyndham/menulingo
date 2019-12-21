import React from "react";

const OpenHours = props => {
  const { title, table } = props.data;
  const style = {
    backgroundColor: "#ffffff",
    padding: "9vh 4vh",
    fontSize: "2.75vh",
    title: {
      fontSize: "5vh"
    },
    table: {
      paddingTop: "2vh",
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
    <section style={style}>
      <h1 style={style.title}>{title}</h1>
      <table style={style.table}>
        <tbody>{renderedRows}</tbody>
      </table>
    </section>
  );
};

export default OpenHours;
