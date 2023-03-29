import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

const AddForm = ({
  deleteAllChecked,
  addToDo,
  
  valueName,
  onChangeData,
}) => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTask">
          <Form.Label>Nhập task</Form.Label>
          <Form.Control
            onChange={onChangeData}
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
    </div>
  );
};

export default AddForm;
