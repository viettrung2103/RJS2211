import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const URL = "https://64145bef36020cecfda6550f.mockapi.io/todos";

const TodosApp = () => {
  const [todos, setTodos] = useState(null);
  const [todo, setTodo] = useState(null);
  const [error, setError] = useState(null);
  const [valueName, setValueName] = useState("");
  const [valueDes, setValueDes] = useState("");
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const [valueId, setValueId] = useState("");

  //fetch du lieu truoc khi render du lieu
  useEffect(() => {
    getListTodos();
  }, []);

  const getListTodos = async () => {
    if (add) {
      setAdd(true);
    }
    if (edit) {
      setEdit(true);
    }
    setLoading(true);
    setValueName("");
    setValueDes("");
    try {
      const result = await axios.get(URL); // if there is error, run error block, so need one more setLoading(error) in error block
      setLoading(false); // while waiting for data, show loading status on screen
      setTodos(result.data);
    } catch (error) {
      setLoading(false);
      setAdd(true);
      setEdit(false);
      setError(`Co loi xay ra`);
    }
  };

  const deleteItem = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${URL}/${id}`);
      setLoading(false);
      setAdd(true);
      setEdit(false);
      getListTodos();
    } catch (error) {
      setLoading(false);
      setAdd(true);
      setEdit(false);
      setError(`Co loi xay ra`);
    }
  };

  const addItem = async () => {
    setLoading(true);
    try {
      await axios.post(URL, {
        name: valueName,
        isCheck: false,
        description: valueDes,
      });
      setLoading(false);
      getListTodos();
      // sau khi them du lieu moi thi reset lai input data trong form
      setValueName("");
      setValueDes("");
    } catch (error) {
      setLoading(false);
      setError(`Co loi xay ra`);
    }
  };

  const editMode = (item) => {
    console.log(`show edit mode ${item})`);
    setAdd(false);
    setEdit(true);
    setValueName(item.name);
    setValueDes(item.description);
    setValueId(item.id);
  };

  const editItem = async (id) => {
    try {
      await axios.put(`${URL}/${id}`, {
        id: valueId,
        name: valueName,
        isCheck: false,
        description: valueDes,
      });
      setLoading(false);
      setAdd(true);
      setEdit(false);
      getListTodos();
    } catch (error) {
      setLoading(false);
      setError(`Co loi xay ra`);
    }
  };
  // khi fetch api>> vi la promise nen can phai check xem co du lieu k
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nhập name</Form.Label>
          <Form.Control
            onChange={(text) => {
              setValueName(text.target.value);
            }}
            value={valueName}
            type="text"
            placeholder="Nhập name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nhập description</Form.Label>
          <Form.Control
            onChange={(text) => {
              setValueDes(text.target.value);
            }}
            value={valueDes}
            type="text"
            placeholder="Nhập description"
          />
        </Form.Group>

        {add ? (
          <Button onClick={addItem} variant="primary">
            Add
          </Button>
        ) : edit ? (
          <Button onClick={() => editItem(valueId)} variant="warning">
            Edit
          </Button>
        ) : null}
      </Form>
      {/* <p onClick={() => editMode(item)} className="text-click">
        Test
      </p> */}
      <ul>
        {loading ? <p>Loading</p> : null}
        {todos ? (
          todos.map((item, index) => {
            return (
              <li className="text-click" key={index}>
                <span>${item.id} --</span>
                {item.name} --
                <Button
                  className="deleteItem"
                  onClick={() => deleteItem(item.id)}
                  variant="danger"
                >
                  Delete
                </Button>
                <Button
                  className="editItem"
                  onClick={() => editMode(item)}
                  variant="warning"
                >
                  Edit
                </Button>
                <p>
                  <i>{item.description}</i>
                </p>
              </li>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </ul>
      {/* Kieu viet dieu kien moi, */}
      {error && <p>{error}</p>}
    </div>
  );
};

export default TodosApp;
