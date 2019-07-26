import React from "react";
import Modal from "./Modal";
import './styles/SingInModal.scss';

function SingInModal (props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="SingInModal">
        <h1>Please SingIn</h1>
        <p>To save data you have to singin</p>
        <button
          className="Text-Button Button Button-Secondary-Dark"
          onClick={props.onSingIn}
        >
          Sign in with Google
        </button>
        <div />
      </div>
    </Modal>
  );
};

export default SingInModal;
