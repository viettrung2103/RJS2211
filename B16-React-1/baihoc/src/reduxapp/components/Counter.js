import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { increCount, increCountWithParams } from "../features/counterSlice";

const Counter = () => {
  const dataCounter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{dataCounter.value}</h1>
      <Button
        onClick={() => {
          dispatch(increCount());
        }}
      >
        Tang 1 don vi
      </Button>
      <Button
        onClick={() => {
          dispatch(increCountWithParams(9));
        }}
      >
        tang 9 don vi
      </Button>
    </div>
  );
};

export default Counter;
