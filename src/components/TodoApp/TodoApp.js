//
// ***Модуль 2 - События и состояние. Формы.***
//

import React, { Component } from 'react';
import shortid from 'shortid';
import TodoList from './TodoList';
import initialTodos from '../../data/TodoListData.json';
import TodoEditor from './TodoEditor/TodoEditor';
class TodoApp extends Component {
  state = {
    todos: initialTodos,
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text: text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  render() {
    const { todos, name, tag } = this.state;

    const todoCount = todos.length;
    const completedTodosCount = todos.reduce((total, todo) => {
      if (todo.completed) {
        return (total += 1);
      }
      return total;
    }, 0);

    return (
      <>
        <div>
          <p>Загальна к-ть завдань: {todoCount}</p>
          <p>К-ть виконаних завдань: {completedTodosCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default TodoApp;
