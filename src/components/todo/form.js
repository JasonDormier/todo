import React from 'react';
import { useState, useEffect } from 'react';
//import Form from 'react-jsonschema-form';
import { Button, Form, ListGroup } from 'react-bootstrap';


export default function TodoForm(props) {

  const [listItem, setListItem] = useState([]);

  const handleInputChange = e => {
    setListItem({ item: { ...listItem.item, [e.target.name]: e.target.value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(listItem.item);
    const item = {};
    setListItem({ item });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h3>Add Item</h3>
        <Form.Group>
          <Form.Label>
            <span>To Do Item</span>
            <Form.Control
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </Form.Label>
          <Form.Label>
            {/* <span>Difficulty Rating</span> */}
            <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </Form.Label>
          <Form.Label>
            <span>Assigned To</span>
            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit" >Add Item</Button>
      </Form>
    </>
  );
}
