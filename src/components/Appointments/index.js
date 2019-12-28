import React from "react";
import { NavBar } from "./NavBar";
import { DateHeader } from "./DateHeader";
import ListOfAppointments from "./ListOfAppointment";
import "./styles.css";
export default class Appointments extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          background: "blue",
          width: "40%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div className="appointments">
          <NavBar></NavBar>
          <DateHeader></DateHeader>
          <ListOfAppointments></ListOfAppointments>
          {/* <AddAppointment></AddAppointment> */}
        </div>
      </div>
    );
  }
}
