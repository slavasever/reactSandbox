//
// ***Модуль 2 - События и состояние***
//

import React, { Component } from 'react';
import s from './Dropdown.module.css';

class Dropdown extends Component {
  static propTypes = {};

  state = {
    visibility: false,
  };

  //   show = () => {
  //     this.setState({
  //       visibility: true,
  //     });
  //   };

  //   hide = () => {
  //     this.setState({
  //       visibility: false,
  //     });
  //   };

  //   toggle = () => {
  //     this.setState(prevState => {
  //       if (prevState.visibility) {
  //         return { visibility: false };
  //       }
  //       return { visibility: true };
  //     });
  //   };

  toggle = () => {
    this.setState(prevState => ({
      visibility: !prevState.visibility,
    }));
  };

  render() {
    const { visibility } = this.state;

    return (
      <div className={s.dropdown}>
        <button type="button" className={s.button} onClick={this.toggle}>
          {visibility ? 'Hide' : 'Show'}
        </button>
        {visibility && <div className={s.menu}>Menu</div>}
      </div>
    );
  }
}

export default Dropdown;
