import React from "react";
import Level3 from "./L3";

export default function Level2({ data, changeName }) {
  return (
    <div style={{ padding: "20px", backgroundColor: "blue" }}>
      ======= Level 2{data}
      <Level3 data={data} changeName={changeName} />
    </div>
  );
}
