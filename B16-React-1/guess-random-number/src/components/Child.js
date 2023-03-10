import React from "react";

const Child = (props) => {
  // const Child = ({name,dataFromParent}) => {
  // khi truong du lieu truyen vo nhieu thi ghi prop
  // khi truong du lieu la ten phuc tap thi nen ghi thang ten truong muon truong vo component con
  return (
    <div>
      <h3 className="wrap-child d-flex-justify-content-center">
        <p>Child</p>
        <p>{props.name}</p>
        <p>{props.dataFromParent}</p>
      </h3>
    </div>
  );
};

export default Child;
