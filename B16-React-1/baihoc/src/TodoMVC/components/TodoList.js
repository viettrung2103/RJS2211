import React, { useState } from "react";
import { Button } from "react-bootstrap";

const TodoList = ({
  handleCheck,
  isEdit,

  editItem,
  deleteItem,
  setIsEdit,
  todos,
  isLoad,
  isCheckedItem,
  handleDoubleClick,
  handleSetValueItemName,
  handleEnterKey,
}) => {
  const [valueItemName, setvalueItemName] = useState("");
  const [valueIsCheck, setValueIsCheck] = useState(false);
  const [valueName, setValueName] = useState(``);

  return (
    <div>
      <ul>
        {isLoad && <p>is Loading </p>}
        {todos
          ? todos.map((item, index) => {
              return (
                <li onDoubleClick={handleDoubleClick} key={index}>
                  <div>
                    <p>
                      {" "}
                      <span>
                        <input
                          type="checkbox"
                          name={valueItemName}
                          checked={item.isChecked}
                          id={item.id}
                          onChange={(e) => handleCheck(e, item)}
                        />
                        <label>{index}</label>
                      </span>{" "}
                      {isEdit && isEdit === item.id ? (
                        <input
                          value={valueItemName}
                          onChange={handleSetValueItemName}
                          onKeyDown={handleEnterKey}
                          type="text"
                        />
                      ) : (
                        <span className={isCheckedItem(item)}>
                          {item.id} -- {item.name} --{" "}
                          {item.isChecked ? "is checked" : "is not check"}
                        </span>
                      )}
                      <Button
                        className="deleteItem"
                        onClick={() => deleteItem(item.id)}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </p>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default TodoList;
