import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";

import { getRandomInt } from "../utils/GLOBAL";
import Header from "./Header";
import Body from "./Body";

const RESULT = {
  thang: "thang",
  thua: "thua",
  doing: "doing",
};

const COLOR = {
  red: "text-danger",
  green: "text-success",
  black: "text-black",
};

function Main() {
  const [guessCount, setGuessCount] = useState(0);
  const [inputNum, setInputNum] = useState("");
  const [randomNum, setRandomNum] = useState(null);
  const [result, setResult] = useState(``);
  const [checkResult, setCheckResult] = useState(RESULT.doing);

  //

  //tao game moi
  const newGame = () => {
    setGuessCount(0);
    createRandom();
    setResult("");
    setCheckResult(RESULT.doing);
  };

  const createRandom = () => {
    const random = getRandomInt(1, 100);
    setRandomNum(random);
  };

  // lay 1 so random ngay khi bat dau game
  useEffect(() => {
    const randomNum = getRandomInt(1, 100);
    setRandomNum(randomNum);
  }, []);

  // doan it nhat 7 lan de trung, hon 7 lan la thua
  useEffect(() => {
    if (guessCount > 7) {
      // setResult(`Ban da thua roi!. Game se reset trong 5s...`);
      setCheckResult(RESULT.thua);
    }
  }, [guessCount]);

  // khi doan dung thi game se reset
  useEffect(() => {
    if (checkResult === RESULT.thang) {
      setResult(`Ban da thang!Game se reset trong 5s....`);
      setTimeout(() => newGame(), 5000);
    }
    if (checkResult === RESULT.thua) {
      setResult(`Ban da thua roi!. Game se reset trong 5s...`);
      setTimeout(() => newGame(), 5000);
    }
  }, [checkResult]);

  const guess = () => {
    if (inputNum > randomNum) {
      setResult(`so ban qua lon`);
    } else if (inputNum < randomNum) {
      setResult(`So ban qua nho`);
    } else {
      setResult(`Ban doan dung roi, so ngau nhien la ${randomNum}`);
      setCheckResult(RESULT.thang);
    }
    setGuessCount(guessCount + 1);
    setInputNum("");
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      guess();
    }
  };

  const onChangeData = (text) => {
    setInputNum(text.target.value);
  };
  // disable button
  // const disabledButton = () => {
  //   // const disabled = true;
  //   return (
  //     <Button onClick={guess} variant="success" type="submit" disabled>
  //       Guess
  //     </Button>
  //   );
  // };
  // enable button
  // const enabledButton = () => {
  //   return (
  //     <Button onClick={guess} variant="success" type="submit">
  //       Guess
  //     </Button>
  //   );
  // };

  return (
    <Container>
      <Header checkResult={checkResult} result={RESULT} color={COLOR} />
      <Body
        newGame={newGame}
        guessCount={guessCount}
        randomNum={randomNum}
        inputNum={inputNum}
        handleKeyDown={handleKeyDown}
        onChangeData={onChangeData}
        guess={guess}
        result={result}
      />
    </Container>
  );
}

export default Main;
