import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const TodoList = ({
  handleCheck,
  isEdit,
  setIsLoad,

  // editItem,
  deleteItem,
  setIsEdit,
  todos,
  isLoad,
  isCheckedItem,
  // handleDoubleClick,
  // handleSetValueItemName,
  // handleEnterKey
}) => {
  const [valueItemName, setvalueItemName] = useState("");
  const [valueIsCheck, setValueIsCheck] = useState(false);
  const [valueName, setValueName] = useState(``);
  // const [isEdit, setIsEdit] = useState(null);

  const handleEnterKey = (e, name) => {
    if (e.key === "Enter") {
      console.log("item here", name);
      setvalueItemName(name);
      editItem(isEdit);
    }
  };

  const editItem = async (id) => {
    setIsLoad(true);
    console.log(`id:${id} name: ${valueItemName}, ischeck:${valueIsCheck}`);
    try {
      await axios.put(`${URL}/${id}`, {
        name: valueItemName,
      });
      // resetData();
      // setIsLoad(false);
    } catch (error) {
      // setIsLoad(false);
      // setError(`Co loi xay ra`);
    }
  };

  const handleDoubleClick = (item) => {
    setvalueItemName(item.name);
    setIsEdit(item.id);
    setValueIsCheck(item.isChecked);
  };

  const handleSetValueItemName = (e) => {
    // console.log("set name", e);
    setvalueItemName(e.target.value);
  };

  return (
    <div>
      <ul>
        {isLoad && <p>is Loading </p>}
        {todos
          ? todos.map((item, index) => {
              return (
                <li onDoubleClick={() => handleDoubleClick(item)} key={index}>
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
                          onKeyDown={(e) => handleEnterKey(e, valueItemName)}
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
