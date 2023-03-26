import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import axios from "axios";

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
        isChecked: valueIsCheck,
        id: id,
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

  // const handleSelect = (event, item) => {
  //   setIsLoad(true);
  //   setIsCheckedMode(item.id);
  //   setvalueItemName(item.name);
  //   // const value = event.target.value;
  //   const isChecked = event.target.checked;
  //   setValueIsCheck(isChecked);
  //   console.log(`${item.id}item name : ${item.name}, check: ${isChecked}`);
  //   editItem(isCheckedMode);
  //   if (isChecked === true) {
  //     // add checked item into checklist
  //     setCheckedState([...checkedList, valueIsCheck]);
  //   } else {
  //     // remove unchecked item from checklist
  //     // setValueIsCheck(isChecked);
  //     // editItem(item.id);
  //     const filteredList = checkedList.filter((item) => item !== isChecked);
  //     setCheckedState(filteredList);
  //   }
  // };
  // const handleCheck = (event, item) => {
  //   const value = event.target.value; // default value
  //   const isChecked = event.target.checked; // value khi click
  //   console.log(`value: ${value}`);
  //   console.log(`isCheck: ${isChecked}`);
  //   let updateList = [...checkedList];

  //   if (isChecked) {
  //     updateList = [...updateList, value];
  //     console.log(`updateList: ${updateList}`);
  //     setCheckedList(updateList);
  //   } else {
  //     const filteredList = updateList.filter((item) => item !== value);
  //     console.log(`filteredList:${filteredList}`);
  //     setCheckedList(filteredList);
  //   }
  // };

  const handleCheck = (event, current) => {
    // const isChecked = event.target.checked;
    const name = event.target.name;
    const id = event.target.id;
    const isChecked = event.target.checked;
    // console.log(`id:${id} name:${name},check:${isChecked}`);
    let updatedList = [...checkedList];
    if (isChecked) {
      //   if (updatedList.includes(id)) {
      //     console.log(`updatedList1:${updatedList}`);
      //     setCheckedList(updatedList);
      //   } else {
      //   }
      updatedList = [...updatedList, id];
      console.log("updateList1", updatedList);
      setCheckedList(updatedList);
      // setCheckedList(updatedList);
      // setvalueItemName(name);
      // setValueIsCheck(isChecked);
      // editItem(id);
    } else {
      let filteredList = updatedList.filter((id) => id !== current.id);
      console.log("filterList", filteredList);
      setCheckedList(filteredList);

      // setvalueItemName(name);
      // setValueIsCheck(isChecked);
      // editItem(id);
    }
    console.log(isChecked);
    setChecked(isChecked);
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
    // console.log(result);
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
                          name={item.name}
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
        <li>
          <span></span>
        </li>
      </ul>
      {checkedList
        ? `con ${todos.length - checkedList.length} item can hoan thanh`
        : null}
      {error && <p>{error} </p>}
    </div>
  );
};

export default TodoMVC;
