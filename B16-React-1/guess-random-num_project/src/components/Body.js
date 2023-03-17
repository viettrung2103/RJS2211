import React from "react";
import Row from "react-bootstrap/Row";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Result from "./Result";

const Body = ({
  newGame,
  guessCount,
  randomNum,
  inputNum,
  handleKeyDown,
  onChangeData,
  guess,
  result,
}) => {
  return (
    <div>
      <Row>
        <Button onClick={newGame} className="my-2">
          New Game
        </Button>
      </Row>
      <p className="my-2">Số lần đoán của bạn là: {guessCount}</p>
      <p className="my-2">Số random la: {randomNum}</p>
      <p className="my-2">giá trị của ô input:{inputNum}</p>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="number"
          onKeyDown={handleKeyDown}
          value={inputNum}
          // onChange la event de xem thay doi trong o input
          onChange={onChangeData}
        />
        {/* {checkResult === RESULT.thang || checkResult === RESULT.thua ? (
          <disabledButton />
        ) : (
          <enabledButton />
        )} */}
        <enabledButton />
        <Button onClick={guess} variant="success" type="submit">
          Guess
        </Button>{" "}
      </InputGroup>
      <Result result={result} />
    </div>
  );
};

export default Body;
