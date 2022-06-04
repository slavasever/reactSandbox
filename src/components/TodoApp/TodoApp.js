//
// ***Модуль 2 - События и состояние***
//

import React, { Component } from 'react';
import TodoList from './TodoList';
import initialTodos from '../../data/TodoListData.json';

class TodoApp extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

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
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default TodoApp;
