import css from './Modal.module.css';
import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <div className={css.modalContainer}>
        <div className={css.modalWindow}>
          <button className={css.closeBtn}>&times</button>
          <h2>Modal</h2>
        </div>
      </div>
    );
  }
}
