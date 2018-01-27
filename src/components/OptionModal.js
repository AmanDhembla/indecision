import React from 'react';
import Modal from 'react-modal';

const OptionModal=(props)=>{
    return (
        <Modal isOpen={!!props.selectedOption} contentLabel="selectedOption" onRequestClose={props.removeModal}>
            <h1>Selected Option</h1>
            <p>{props.selectedOption}</p>
            <button onClick={props.removeModal}>Okay</button>
        </Modal>
    )
}

export default OptionModal;
