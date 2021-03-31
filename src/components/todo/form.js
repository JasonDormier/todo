import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import useForm from '../../hooks/useForm.js';

export default function TodoForm({ addItem }) {

  let [values, handleChange, handleSubmit] = useForm(addItem);

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
              onChange={handleChange}
            />
          </Form.Label>
          <Form.Label>
            <span>Difficulty Rating</span>
            <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
          </Form.Label>
          <Form.Label>
            <span>Assigned To</span>
            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleChange} />
          </Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit" >Add Item</Button>
      </Form>
    </>
  );
}
