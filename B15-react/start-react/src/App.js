import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Menu from "./components/Menu";
// state, hoac la data trong app, khi state thay doi thi component se dc render lai
// const student = {
//   name: "Tung",
//   age: 30,
// };
// let counter = 0;

function App() {
  const [counter, setCounter] = useState(0); // state khoi tao, counter
  const [student, setstudent] = useState({ name: "Tung", age: 30 });
  // ghi tat la ush
  // cach dat ten set theo cai bien dc
  return (
    <div className="App">
      <Menu />
      <h1 className="change-text">Name: {student.name}</h1>
      <h3>
        <div className="change-text">Age: {student.age}</div>
      </h3>
      <h6> Tinh Tong 10 + 20 = {10 + 20}</h6>
      <h3> counter = {counter}</h3>
      <button
        onClick={() => {
          setCounter(counter + 2); // set du lieu, tuc la da co du lieu moi, >>state se dc update voi
          console.log(`counter: ${counter}`);
        }}
      >
        CLick
      </button>
    </div>
  );
}

export default App;
