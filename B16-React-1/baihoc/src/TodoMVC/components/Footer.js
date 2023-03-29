import React from "react";

const Footer = ({ checkedList, todos }) => {
  return (
    <div>
      {checkedList
        ? `con ${todos.length - checkedList.length} item can hoan thanh`
        : null}
    </div>
  );
};

export default Footer;
