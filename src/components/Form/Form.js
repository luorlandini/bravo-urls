import React, { useContext, useState } from "react";
import Store from "./../../store";
import { v4 as uuidv4 } from 'uuid';
import { validateUrl } from '../../utilities'
import { Modal } from 'react-bootstrap';
const Form = () => {
    const { dispatch } = useContext(Store);

    const [url, setUrl] = useState("");
    const [count, setCount] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const handleCloseAlert = () => setShowAlert(false);
    const handleShowAlert = () => setShowAlert(true);

    const handleItemChange = (e) => {
        setUrl(e.target.value);
    }

    const handleItemAdd = () => {

        const isValideUrl = validateUrl(url);
        if (!isValideUrl) {
            handleShowAlert()
            return false
        }
        dispatch({ type: "ADD_ITEM", payload: { key: uuidv4(), url: url, count: count } });
        setUrl("");
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <br />
                <div className="input-group">
                    <input
                        className="form-control"
                        value={url}
                        type="url"
                        placeholder="https://example.com"

                        autoFocus={true}
                        onChange={handleItemChange}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" onClick={handleItemAdd}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <Modal show={showAlert} onHide={handleCloseAlert}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>Please, insert a valid url, es: https://example.com</Modal.Body>
            </Modal>
        </div>
    );
}

export default Form