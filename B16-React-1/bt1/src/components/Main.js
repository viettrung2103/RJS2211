import React, { useState } from "react";
import Menu from "./Menu";
import Body from "./Body";
import Footer from "./Footer";

const STUDENTS = [
  { name: "Trung", gender: "male", age: 28 },
  { name: "Tung", gender: "male", age: 30 },
  { name: "Hieu", gender: "male", age: 24 },
  { name: "Thao", gender: "female", age: 25 },
  { name: "Tam", gender: "female", age: 20 },
];

const Main = () => {
  const [showFooter, setShowFooter] = useState(true);
  // const [studentList, setStudentList] = useState(STUDENTS);

  const toggleFooter = () => {
    setShowFooter(!showFooter);
  };
  return (
    <div>
      <Menu />
      <Body studentList={STUDENTS} />
      <button onClick={toggleFooter}> Toggle Footer</button>
      {showFooter === true ? <Footer /> : null}
    </div>
  );
};

export default Main;
