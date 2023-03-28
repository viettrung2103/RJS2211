import React from "react";
import Level1 from "./components/L1";
import userSlice from "./features/userSlice";

export default function ReduxApp() {
  return (
    <div>
      <Level1 />
      {console.log(userSlice)}
    </div>
  );
}
