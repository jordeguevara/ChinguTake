import React from "react";

export const DateHeader = () => {
  return (
    <div
      style={{
        height: 150,
        display: "flex",
        justifyContent: "center",
        fontSize: 24
      }}
    >
      <div
        style={{
          width: "90%"
        }}
      >
        <div>Sunday</div>
        <div>January 01</div>
      </div>
    </div>
  );
};
