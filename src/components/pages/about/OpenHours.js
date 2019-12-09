import React from "react";

const OpenHours = props => {
  const { title, table } = props.data;
  const style = {
    backgroundColor: "#f1f1f1",
    borderRadius: "10px",
    padding: "2vh",
    paddingTop: "4vh",
    marginBottom: "1vh",
    table: {
      paddingTop: "2vh",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      borderSpacing: "4vh 1vh"
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
      <h1>{title}</h1>
      <table style={style.table}>
        <tbody>{renderedRows}</tbody>
      </table>
    </section>
  );
};

export default OpenHours;
