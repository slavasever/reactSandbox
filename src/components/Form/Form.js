//
// ***Модуль 2 - Формы. ***
//

import React, { Component } from 'react';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    license: false,
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };

  onLicenseChecked = event => {
    console.log(event.currentTarget.checked);
    this.setState({ license: event.currentTarget.checked });
  };

  render() {
    const { name, tag, experience, license } = this.state;

    return (
      <>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label className={s.label}>
            Name
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
          <label className={s.label}>
            Tag
            <input type="text" name="tag" value={tag} onChange={this.handleChange} />
          </label>

          <br />

          <p>Your level:</p>

          <br />

          <label className={s.label}>
            <input
              type="radio"
              name="experience"
              value="junior"
              checked={experience === 'junior'}
              onChange={this.handleChange}
            />
            Junior
          </label>
          <label className={s.label}>
            <input
              type="radio"
              name="experience"
              value="middle"
              checked={experience === 'middle'}
              onChange={this.handleChange}
            />
            Middle
          </label>
          <label className={s.label}>
            <input
              type="radio"
              name="experience"
              value="senior"
              checked={experience === 'senior'}
              onChange={this.handleChange}
            />
            Senior
          </label>
          <label>
            <input
              type="checkbox"
              name="license"
              checked={license}
              onChange={this.onLicenseChecked}
            />
            Agree with conditions
          </label>
          <br />
          <button type="submit" className={s.button} disabled={!license}>
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Form;
