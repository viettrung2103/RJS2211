import React, { useState } from "react";

const Child = ({ name, dataFromParent, handleClickChild }) => {
  const [childData, setChildData] = useState(``);
  // const Child = ({name,dataFromParent}) => {
  // khi truong du lieu truyen vo nhieu thi ghi prop
  // khi truong du lieu la ten phuc tap thi nen ghi thang ten truong muon truong vo component con

  const resetChildData = () => {
    setChildData(0);
    console.log(`day la child data ${childData}`);
  };
  return (
    <div>
      <h3 className="wrap-child d-flex-justify-content-center">
        <p>Child</p>
        <p>{name}</p>
        <p>{dataFromParent}</p>
      </h3>
      <button onClick={resetChildData}>Reset Data</button>
      <button
        onClick={() => {
          handleClickChild(childData);
        }}
        variant="success"
      >
        Move data from child to parent
      </button>
    </div>
  );
};

export default Child;
