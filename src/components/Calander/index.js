import React from "react";
import { getMonths } from "../utils";
import "./styles.css";
const Header = () => (
  <div className="header1">
    <h3 style={{ fontSize: 28 }}>Jan</h3>
    <div className="divider"></div>
  </div>
);
const days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
export default class Calander extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDays() {
    return days.map(val => (
      <div
        style={{
          // background: "blue",
          height: 100,
          width: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {val}
      </div>
    ));
  }

  renderWeeks() {
    let dayButtons = [];
    for (let i = 1; i < 31; i++) {
      dayButtons.push(
        <button
          style={{
            height: 100,
            width: 100,
            backgroundColor: "transparent",
            border: "none",
            fontSize: 14
          }}
        >
          {i}
        </button>
      );
    }
    return dayButtons;
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          background: "white",
          width: "80%",
          height: "80vh",
          flexDirection: "column"
        }}
      >
        <Header></Header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
            // background: "red"
          }}
        >
          {this.renderDays()}
        </div>
        <div className="days">{this.renderWeeks()}</div>
      </div>
    );
  }
}
