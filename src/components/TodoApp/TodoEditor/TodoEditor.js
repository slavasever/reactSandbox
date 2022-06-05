import React, { Component } from 'react';
import s from './TodoEditor.module.css';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = event => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { message } = this.state;

    onSubmit(message);
    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <textarea value={message} className={s.textarea} onChange={this.handleChange}></textarea>
        <button type="submit" className={s.button}>
          Save
        </button>
      </form>
    );
  }
}

export default TodoEditor;
