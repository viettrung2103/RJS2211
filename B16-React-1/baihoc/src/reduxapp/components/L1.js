import React, { useState } from "react";
import Level2 from "./L2";
import { useSelector } from "react-redux";

export default function Level1() {
  const [name, setname] = useState("Tung");

  const userData = useSelector((state) => state.userReducer);
  console.log("bb userData", userData);
  const changeName = (data) => {
    console.log("level 1 co data cua level 4", data);
    setname(data);
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "red", color: "white" }}>
      ======= Level 1{name}
      <Level2 data={name} changeName={changeName} />
      {userData.token}
    </div>
  );
}
