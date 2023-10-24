import React, { Component } from 'react';
import { StyledModal } from './Styled';

export default class Modal extends Component {
  render() {
    return (
      <StyledModal>
        <div className="modal">
          <button className="closeBtn">&times</button>
          <h2>Modal</h2>
        </div>
      </StyledModal>
    );
  }
}
