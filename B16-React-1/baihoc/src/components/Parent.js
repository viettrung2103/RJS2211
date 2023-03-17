import React, { useState } from "react";
import Child from "./Child";
import { Button, Card } from "react-bootstrap";
import Menu from "./Menu";
import CardItem from "./CardItem";
import Row from "react-bootstrap/Row";

const Parent = () => {
  const [number, setNumber] = useState(30);
  //ush
  const [showLight, setShowLight] = useState(false);
  const [products, setProduct] = useState([
    { name: "Iphone", price: 20000, img: "https://picsum.photos/200" },
    { name: "Androi", price: 40000, img: "https://picsum.photos/200" },
    { name: "Nokia", price: 30000, img: "https://picsum.photos/200" },
    { name: "Microsoft", price: 50000, img: "https://picsum.photos/200" },
  ]);
  const [childData, setChildData] = useState();
  //tat ca event nhan vao 1 function chu khong chay function
  const toogleChild = () => {
    console.log("Click");
    setShowLight(!showLight);
  };
  const increaseCount = (numberIncrease) => {
    setNumber(number + numberIncrease);
  };
  // de dao bao tat ca event luon nhan vao 1 function, chu ko phai chay 1 function, can chu y tham so truyen vao
  // {() => ...}
  // function co tham so : truyen truc tiep vao event
  // function co tham so: boc trong 1 function khac

  // tao 1 callback function de hung' data tu con
  const handleClickChild = (data) => {
    console.log(`log data == ${data}`);
    setChildData(data);
    setNumber(data);
  };

  // const resetChildData = () => {
  //   setChildData(0);
  // };

  return (
    <div>
      <h2 onMouseOver={() => increaseCount(10)} className="parent-click">
        Parent
      </h2>
      <p>{childData}</p>
      <p>Function khong co tham so</p>
      <Button onClick={toogleChild} variant="success">
        Toggle Child
      </Button>{" "}
      <p>Function co tham so</p>
      <Button
        onClick={() => {
          increaseCount(20);
        }}
        variant="primary"
      >
        Increse
      </Button>{" "}
      <p>{number}</p>
      {showLight === true ? (
        <Child
          handleClickChild={handleClickChild}
          dataFromParent={number}
          name={"Tung"}
          // resetChildData={resetChildData}
        />
      ) : null}
      {/* <Row className="d-flex justify-content-center align-items-center">
        {products.map((product, index) => {
          return <CardItem dataItem={product} />;
        })}
      </Row> */}
    </div>
  );
};

export default Parent;
