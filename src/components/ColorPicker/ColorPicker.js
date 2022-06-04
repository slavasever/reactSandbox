//
// ***Модуль 2 - События и состояние***
//

import React, { Component } from 'react';
import s from './ColorPicker.module.css';
import PropTypes from 'prop-types';

class ColorPicker extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };

  state = {
    activeOptionIdx: 1,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeClasses = index => {
    const optionClasses = [s.option];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push(s.active);
    }
    return optionClasses.join(' ');
  };

  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;

    const activeOptionLabel = options[activeOptionIdx].label;

    return (
      <div className={s.colorPicker}>
        <h2 className={s.title}>Color Picker</h2>
        <p className={s.color}>Color: {activeOptionLabel}</p>
        <div className={s.container}>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeClasses(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
