import React from 'react';
import Modal from 'react-modal';

const OptionModal=(props)=>{
    return (
        <Modal isOpen={!!props.selectedOption} contentLabel="selectedOption" onRequestClose={props.removeModal} closeTimeoutMS={200} className="modal">
            <h1 className="modal__title">Selected Option</h1>
            <p className="modal__body">{props.selectedOption}</p>
            <button className="button" onClick={props.removeModal}>Okay</button>
        </Modal>
    )
}

export default OptionModal;
