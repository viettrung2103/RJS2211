import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState(null);

  const getListTodos = async () => {
    const result = await axios.get(
      "https://64145bef36020cecfda6550f.mockapi.io/todos"
    );
    setTodos(result);
  };

  useEffect(() => {
    getListTodos();
  }, []);

  // khi fetch api>> vi la promise nen can phai check xem co du lieu k
  return (
    <div>
      <ul>
        {todos ? (
          todos.map((item, idex) => {
            return <li>{item.name}</li>;
          })
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
