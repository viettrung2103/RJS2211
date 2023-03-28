import React from "react";

export default function Level4(props) {
  return (
    <div
      onClick={() => {
        props.changeName("Hoang");
        console.log("click");
      }}
      style={{ padding: "20px", backgroundColor: "pink" }}
    >
      =================
      <p>Level4</p>
      {props.data}
    </div>
  );
}
