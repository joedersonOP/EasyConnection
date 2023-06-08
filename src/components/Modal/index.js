import React from 'react';
import './Modal.css';
import { Link } from 'react-router-dom';

const Modal = (props) => {

    return (
        <div
            id='modal'
            className="modal-container"
            style={props.modalOpened ? {'display':'block'} : {'display':'none'}}
        >
            <div className="modal-content">
                <span className="close" onClick={() => props.setModalOpened(false)}>&times;</span>
                <p>{ props.texto }</p>
                <Link to="/" className="btn btn-primary" title="Voltar">Voltar</Link>
            </div>
        </div>
    );
}

export default Modal;