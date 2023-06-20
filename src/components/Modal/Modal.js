import css from './modal.module.css';
import React, { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyPressed);
  }

  onKeyPressed = e => {
    if (e.keyCode === 27) {
      document.removeEventListener('keydown', this.onKeyPressed);
      return this.props.closeModal('close');
    }
  };

  render() {
    return (
      <div
        className={css.Overlay}
        onClick={evt => {
          this.props.closeModal(evt.target.className);
        }}
      >
        <div className={css.Modal}>
          <img src={this.props.img} alt="" width="800" height="600" />
        </div>
      </div>
    );
  }
}

export default Modal;
