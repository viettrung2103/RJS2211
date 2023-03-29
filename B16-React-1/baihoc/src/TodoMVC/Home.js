import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import Header from "./components/Header";

import axios from "axios";

import { useSelector } from "react-redux";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import Error from "./components/Error";
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
  }, []);

  const getListTodos = async () => {
    setIsLoad(true);
    try {
      const result = await axios.get(URL);
      console.log("todo List:", result.data);
      setTodos(result.data);
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
    const name = event.target.name;
    const id = event.target.id;
    const isChecked = event.target.checked;
    console.log(
      `handle check: name:${current.name},id:${id},check:${isChecked}`
    );

    let updatedList = [...checkedList];
    if (isChecked) {
      updatedList = [...updatedList, id];
      setCheckedList(updatedList);
      // editItem(current.id);
    } else {
      let filteredList = updatedList.filter((id) => id !== current.id);
      setCheckedList(filteredList);
    }
    console.log(isChecked);
    setvalueItemName(current.name);
    await axios.put(`${URL}/${current.id}`, {
      isChecked,
    });

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

    return result ? "checked-item" : "not-checked-item";
  };

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

  const onChangeData = (text) => {
    setValueName(text.target.value);
  };

  const handleDoubleClick = (item) => {
    console.log(`testing`);
    setvalueItemName(item.name);
    setIsEdit(item.id);
    setValueIsCheck(item.isChecked);
  };

  const handleSetValueItemName = (e) => {
    setvalueItemName(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      editItem(isEdit);
    }
  };
  return (
    <div>
      <Header />
      <AddForm
        deleteAllChecked={deleteAllChecked}
        addToDo={addToDo}
        valueName={valueName}
        onChangeData={onChangeData}
      />
      <TodoList
        isLoad={isLoad}
        todos={todos}
        valueItemName={valueItemName}
        valueIsCheck={valueIsCheck}
        handleCheck={handleCheck}
        isEdit={isEdit}
        setvalueItemName={setvalueItemName}
        editItem={editItem}
        deleteItem={deleteItem}
        setIsEdit={setIsEdit}
        setValueIsCheck={setValueIsCheck}
        isCheckedItem={isCheckedItem}
        handleDoubleClick={handleDoubleClick}
        handleSetValueItemName={handleSetValueItemName}
        handleEnterKey={handleEnterKey}
      />
      {/* <ul>
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
      </ul> */}
      <Footer checkedList={checkedList} todos={todos} />
      <Error error={error} />
      {/* {error && <p>{error} </p>} */}
    </div>
  );
};

export default TodoMVC;
