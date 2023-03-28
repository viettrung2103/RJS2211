import React from "react";
import Level4 from "./L4";
import { useSelector } from "react-redux";

export default function Level3({ data, changeName }) {
  const userData = useSelector((state) => state.userReducer);
  console.log("bb userData", userData);
  return (
    <div style={{ padding: "20px", backgroundColor: "green" }}>
      ========== Level 3{data}
      <h3>Đây là dữ liệu trong store</h3>
      {userData.token}
      <Level4 data={data} changeName={changeName} />
    </div>
  );
}
