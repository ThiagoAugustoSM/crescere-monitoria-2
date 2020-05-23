import React, { useState } from "react";

import Modal from "react-awesome-modal";

const MeuModal = (props) => {
  return (
    <Modal
      visible={props.visivel}
      width="400"
      height="300"
      effect="fadeInUp"
      onClickAway={() => props.closeModal()}
    >
      <div style={{ backgroundColor: props.bgColor }}>
        <h1>{props.title}</h1>
        <p>Some Contents</p>
        <a href="javascript:void(0);">Close</a>
      </div>
    </Modal>
  );
};

export default MeuModal;
