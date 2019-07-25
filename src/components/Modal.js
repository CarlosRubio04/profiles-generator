import React from 'react';
import ReactDOM from 'react-dom';

import './styles/Modal.scss';

function Modal (props) {
    if (!props.isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="ModalContainer">
                <button onClick={props.onClose} className="ModalClose">
                    X
                </button>

                {props.chilren}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;