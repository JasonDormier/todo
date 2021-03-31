import React from 'react';
import { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import axios from 'axios';


import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

export default function ToDo() {

  const [list, setList] = useState([]);

  document.title = `Items left ${list.filter(item => !item.complete).length}`;

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

  useEffect(() => {
    getItem();
  }, []);

  const postItem = async (input) => {
    try {
      let request = await axios({
        method: 'post',
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

      newValue.complete = !newValue.complete;
      let toggle = newValue.complete;

      let request = await axios({
        method: 'put',
        url: `${todoAPI}/${id}`,
        data: { complete: toggle }
      })
      getItem();
      return request;
    };
  };

  const deleteItem = async (id) => {
    let request = await axios({
      method: 'delete',
      url: `${todoAPI}/${id}`,
    })
    getItem();
    return request;
  }


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


