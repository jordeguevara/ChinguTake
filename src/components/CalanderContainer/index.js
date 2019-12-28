import React from "react";
import Calander from "../Calander";
export default class CalanderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          // background: "yellow",
          width: "60%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "100%",
            fontSize: 36,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
          v
        >
          <h3>eCalander</h3>
          <h3>2020</h3>
        </div>
        <Calander></Calander>
      </div>
    );
  }
}
