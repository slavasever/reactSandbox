//
// ***Модуль 2 - События и состояние. Формы***
//

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className={s.list}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={s.item}>
        <input type="checkbox" checked={completed} onChange={() => onToggleCompleted(id)} />
        <p className={s.text}>{text}</p>
        <button type="button" className={s.button} onClick={() => onDeleteTodo(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
