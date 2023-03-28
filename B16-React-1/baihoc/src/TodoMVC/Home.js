import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import axios from "axios";

import { useSelector } from "react-redux";

const URL = "https://64145bef36020cecfda6550f.mockapi.io/todoMVC";

const TodoMVC = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [valueName, setValueName] = useState(``);
  const [isLoad, setIsLoad] = useState(false);
  const [isCheckedMode, setIsCheckedMode] = useState(null); // vo checkmode nhan id

  const [checkedList, setCheckedList] = useState([]);
  const [isEdit, setIsEdit] = useState(null);
  const [valueItemName, setvalueItemName] = useState("");
  const [valueIsCheck, setValueIsCheck] = useState(false);
  const [totalUncheck, setTotalUncheck] = useState(0);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getListTodos();
    getCheckedList();

    // setCheckedState(new Array(todos.length).fill(false));
  }, []);

  // const getCheckedList = async () => {
  //   try {
  //     const result = await axios.get(URL);
  //     let checkedStateList = new Array(result.data.length.fill(false));
  //     setCheckedState(checkedStateList);
  //   } catch (error) {
  //     setError(`co loi xay ra`);
  //   }
  // };

  // const getStateList = async () => {
  //   try {
  //     const result = await axios.get(URL);
  //     const stateList = result.data.maps((item, index) => {
  //       return { id: item.id, isChecked: item.isChecked };
  //     });
  //     setCheckedList(stateList);
  //   } catch (error) {
  //     setError(`co loi xay ra`);
  //   }
  // };

  const getListTodos = async () => {
    setIsLoad(true);
    try {
      const result = await axios.get(URL);
      console.log("todo List:", result.data);
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

  const getCheckedList = async () => {
    try {
      const result = await axios.get(URL);
      const todos = [...result.data];
      const checkedList = todos.filter((item) => item.isChecked === true);
      const finalList = checkedList.map((item) => item.id);
      console.log("checkedList:", finalList);
      setCheckedList(finalList);
    } catch (error) {
      setError(`co loi xay ra`);
    }
  };
  // const getListCheckedState = async() => {
  //   setIsLoad(true);
  //   try()
  // }
  const addToDo = async () => {
    const data = {
      name: valueName,
      isChecked: false,
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
    setIsLoad(true);
    try {
      await axios.delete(`${URL}/${id}`);
      getListTodos();
    } catch (error) {
      setIsLoad(false);
      setError(`Co loi xay ra`);
    }
  };

  const editItem = async (id) => {
    setIsLoad(true);
    console.log(`id:${id} name: ${valueItemName}, ischeck:${valueIsCheck}`);
    try {
      await axios.put(`${URL}/${id}`, {
        name: valueItemName,
      });
      resetData();
      setIsLoad(false);
    } catch (error) {
      setIsLoad(false);
      setError(`Co loi xay ra`);
    }
  };

  const resetData = () => {
    setIsEdit(null);
    getListTodos();
    getCheckedList();
  };

  const handleCheck = async (event, current) => {
    // const isChecked = event.target.checked;
    const name = event.target.name;
    const id = event.target.id;
    const isChecked = event.target.checked;
    console.log(
      `handle check: name:${current.name},id:${id},check:${isChecked}`
    );
    // setvalueItemName(name);
    // setValueIsCheck(isChecked);
    // console.log(`id:${id} name:${name},check:${isChecked}`);
    let updatedList = [...checkedList];
    if (isChecked) {
      updatedList = [...updatedList, id];

      setCheckedList(updatedList);
      // editItem(current.id);
    } else {
      let filteredList = updatedList.filter((id) => id !== current.id);
      setCheckedList(filteredList);
      // editItem(id);

      // setvalueItemName(name);
      // setValueIsCheck(isChecked);
      // editItem(id);
      // editItem(current.id);
    }
    console.log(isChecked);
    setvalueItemName(current.name);
    await axios.put(`${URL}/${current.id}`, {
      isChecked,
    });
    // getListTodos();

    // setValueIsCheck(current.isChecked);
    // editItem(current.id);
    setTodos(
      todos.map((todo) => {
        return todo !== current
          ? todo
          : { name: todo.name, isChecked: isChecked, id: todo.id };
      })
    );
  };
  const isCheckedItem = (item) => {
    const result = checkedList.includes(item.id);
    // console.log("result", result);
    return result ? "checked-item" : "not-checked-item";
  };
  // checkedList.includes(item.id) ? "checked-item" : "not-checked-item";
  // value = isChecked;
  // console.log(`value: ${value}, ischeck: ${isChecked}`);
  // const data = { id: current.id, name: current.name, isChecked: isChecked };
  // setvalueItemName(current.name);
  // setValueIsCheck(value);
  // if (isChecked === true) {
  //   editItem(current.id);
  // } else {
  //   // setvalueItemName(current.name);
  //   // setValueIsCheck(value);
  //   editItem(current.id);
  // }
  // setvalueItemName(current.name);
  // setValueIsCheck(false);
  // editItem(current.id);

  // editItem(value);
  // setTodos(
  //   todos.map((todo) => {
  //     return todo !== current
  //       ? todo
  //       : { id: todo.id, name: todo.name, isChecked: isChecked };
  //   })
  // );

  // const getCheckedList = () => {
  //   let stateList = setCheckedList(
  //     todos.filter((item) => (item.isChecked = true))
  //   );
  //   console.log(stateList);
  // };

  const deleteAllChecked = async () => {
    const uncheckedList = await Promise.all(
      todos.filter((item) => {
        if (item.isChecked) {
          deleteItem(item.id);
          return false; // item return false se ko dc giu trong filtered list
        } else {
          return true; // item nao dc return true thi se giu lai trong array
        }
      })
      );
      setTodos(uncheckedList);
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
        <Button onClick={deleteAllChecked} variant="primary">
          Delete All Checked
        </Button>
      </Form>

      <ul>
        {isLoad && <p>is Loading </p>}
        {todos
          ? todos.map((item, index) => {
              return (
                <li
                  onDoubleClick={() => {
                    setvalueItemName(item.name);
                    setIsEdit(item.id);
                    setValueIsCheck(item.isChecked);
                  }}
                  key={index}
                >
                  <div>
                    <p>
                      {" "}
                      <span>
                        <input
                          type="checkbox"
                          name={valueItemName}
                          checked={item.isChecked}
                          id={item.id}
                          className={checked === true ? "checked-item" : null}
                          // checked={checkedList[item] || false}
                          // defaultChecked={item.isChecked}
                          onChange={(e) => handleCheck(e, item)}
                        />
                        <label>{index}</label>
                      </span>{" "}
                      {isEdit && isEdit === item.id ? (
                        <input
                          value={valueItemName}
                          onChange={(e) => {
                            setvalueItemName(e.target.value);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              editItem(isEdit);
                            }
                          }}
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
      {checkedList
        ? `con ${todos.length - checkedList.length} item can hoan thanh`
        : null}
      {error && <p>{error} </p>}
    </div>
  );
};

export default TodoMVC;
