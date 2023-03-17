import React from "react";

const Header = ({ checkResult, result, color }) => {
  return (
    <div>
      <p
        className={`text-center fw-bold my-2 ${
          checkResult === result.thang
            ? color.green
            : checkResult === result.thua
            ? color.red
            : color.black
        }`}
      >
        Random Number (1-100)
      </p>
    </div>
  );
};

export default Header;
