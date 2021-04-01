import React from 'react';
import { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import axios from 'axios';

import useAjax from '../../hooks/ajax.js'


import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

export default function ToDo() {
  const [request, response] = useAjax();
  const [list, setList] = useState([]);
  const [data, setData] = useState();

  document.title = `Items left ${list.filter(item => !item.complete).length}`;

  // useEffect(() => {
  //   request({ 'https://api-js401.herokuapp.com/api/v1/todo' });
  // }, [request]);

  useEffect(() => {
    setData(response);
  }, [response]);


  const getItem = async () => {
    try {
      let request = await axios({
        method: 'get',
        url: todoAPI
      });

      let todos = request.data.results;
      setList(todos);
    }
    catch (e) {
      console.warn(e.message)
    };
  };

  const postItem = async (input) => {
    try {
      let request = await axios({
        method: 'post',
        mode: 'cors',
        headers: { 'Content': 'application/json' },
        url: todoAPI,
        data: input,
      });
      getItem();
      return request;
    }
    catch (e) {
      console.warn(e.message)
    };
  };

  const putItem = async (id) => {
    let newValue = list.filter((list) => list._id === id)[0];

    if (newValue._id) {

      let request = await axios({
        method: 'put',
        mode: 'cors',
        headers: { 'Content': 'application/json' },
        url: `${todoAPI}/${id}`,
        data: { complete: !newValue.complete }
      })
      getItem();
      return request;
    };
  };

  const deleteItem = async (id) => {
    let request = await axios({
      method: 'delete',
      mode: 'cors',
      headers: { 'Content': 'application/json' },
      url: `${todoAPI}/${id}`,
    })
    getItem();
    return request;
  }

  useEffect(() => {
    getItem();
  }, [putItem, deleteItem]);

  return (
    <>
      <main className="todo-details">
        <header>
          <h2>
            To Do List Manager ({list.filter(item => !item.complete).length})
          </h2>
        </header>

        <section className="todo">

          <div>
            <TodoForm addItem={postItem} />
          </div>

          <div >
            <TodoList className="item"
              list={list}
              handleComplete={putItem}
              handleDelete={deleteItem}
            />
          </div>
        </section>
      </main>
    </>
  );
}


