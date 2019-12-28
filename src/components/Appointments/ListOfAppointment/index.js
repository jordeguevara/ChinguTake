import React from "react";
import "./styles.css";
export default class ListOfAppointment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", height: "90vh" }}
      >
        <div
          className="appointmentBox"
          style={{
            // background: "#ccc",
            width: "90%",
            height: "70%",
            color: "#fff"
            // justifyContent: "center"
          }}
        >
          No Appointments
        </div>
      </div>
    );
  }
}
