import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import axios from "axios";

const URL = "https://64145bef36020cecfda6550f.mockapi.io/todoMVC";

const TodoMVC = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [valueName, setValueName] = useState(``);
  const [isLoad, setIsLoad] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedList, setCheckedState] = useState([]);
  const [isEdit, setIsEdit] = useState(null);
  const [valueItemName, setvalueItemName] = useState("");
  const [valueIsCheck, setValueIsCheck] = useState(false);
  const [totalUncheck, setTotalUncheck] = useState(0);

  useEffect(() => {
    getListTodos();

    // setCheckedState(new Array(todos.length).fill(false));
  }, []);

  useEffect(() => {
    console.log(checkedList);
  }, [checkedList]);

  // const getCheckedList = async () => {
  //   try {
  //     const result = await axios.get(URL);
  //     let checkedStateList = new Array(result.data.length.fill(false));
  //     setCheckedState(checkedStateList);
  //   } catch (error) {
  //     setError(`co loi xay ra`);
  //   }
  // };

  const getListTodos = async () => {
    setIsLoad(true);
    try {
      const result = await axios.get(URL);
      setTodos(result.data);
      // result.forEach((item) => {
      //   item.isChecked = false;
      // });
      setIsLoad(false);
    } catch (error) {
      setIsLoad(false);
      setError(`Co Loi xay ra`);
    }
  };

  // const getListCheckedState = async() => {
  //   setIsLoad(true);
  //   try()
  // }
  const addToDo = async () => {
    const data = {
      name: valueName,
      isCompleted: false,
    };
    setIsLoad(true);
    try {
      await axios.post(URL, data);
      setValueName("");
      getListTodos();
    } catch (error) {
      setIsLoad(false);
      setError(`Co loi xay ra`);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      getListTodos();
    } catch (error) {
      setError(`Co loi xay ra`);
    }
  };

  // const resetData = () => {
  //   setValueName("");
  //   getListTodos();
  // };
  // khi check thi

  // const handleOnChange = (position) => {
  //   const updateCheckedState = checkedState.map((item, index) =>
  //     index === position ? !item : item
  //   );
  //   setCheckedState(updateCheckedState);
  //   console.log(checkedState);
  // };
  // const handleOnChange = () => {
  //   console.log(isChecked);
  //   setIsChecked(!isChecked);
  // };

  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      // add checked item into checklist
      setIsChecked(!isChecked);
      setCheckedState([...checkedList, value]);
    } else {
      // remove unchecked item from checklist
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedState(filteredList);
    }
  };
  return (
    <div>
      <h1>Todos</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTask">
          <Form.Label>Nhập task</Form.Label>
          <Form.Control
            onChange={(text) => {
              setValueName(text.target.value);
            }}
            value={valueName}
            type="text"
            placeholder="Nhập task"
          />
        </Form.Group>
        <Button onClick={addToDo} variant="primary">
          Add
        </Button>
      </Form>

      <ul>
        {isLoad && <p>is Loading </p>}
        {todos
          ? todos.map((item, index) => {
              return (
                <li
                  onDoubleClick={() => {
                    setValueName(item.name);
                    setIsEdit(item.id);
                  }}
                  key={index}
                >
                  <div>
                    <p>
                      <span>
                        {" "}
                        <input
                          type="checkbox"
                          name="languages"
                          value={item.isChecked}
                          onChange={(e) => handleSelect(e, item)}
                        />
                      </span>
                      {isEdit && isEdit === item.id ? (
                        <input
                          value={valueName}
                          onChange={(e) => {
                            setvalueItemName(e.target.value);
                          }}
                          type="text"
                        />
                      ) : (
                        <div>
                          <span>
                            {" "}
                            {item.id} -- {item.name} --{" "}
                            {item.isChecked ? "is checked" : "is not check"}
                          </span>
                        </div>
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
        <li>
          <span></span>
        </li>
      </ul>
      {checkedList ? `con ${todos.length - checkedList.length} item` : null}
      {error && <p>{error} </p>}
    </div>
  );
};

export default TodoMVC;
