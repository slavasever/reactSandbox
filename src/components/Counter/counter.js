//
// ***Модуль 2 - События и состояние***
//

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';
import s from './Counter.module.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };

  state = {
    value: this.props.initialValue,
  };

  // Аналогічні записи:
  // 1-
  // handleIncrement = () => {
  //   this.setState(prevState => {
  //     return { value: prevState.value + 1 };
  //   });
  // };
  // 2-
  // handleIncrement = () => {
  //   this.setState(prevState => ({ value: prevState.value + 1 }));
  // };

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className={s.counter}>
        <span className={s.value}>{value}</span>
        <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
      </div>
    );
  }
}

export default Counter;
