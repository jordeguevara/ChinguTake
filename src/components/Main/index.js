import React from "react";
import CalanderContainer from "../CalanderContainer";
import Appointments from "../Appointments";
function Main() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <CalanderContainer></CalanderContainer>
      <Appointments></Appointments>
    </div>
  );
}

export default Main;
