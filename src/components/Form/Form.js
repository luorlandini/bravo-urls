import React, { useContext, useState } from "react";
import Store from "./../../store";
import { v4 as uuidv4 } from 'uuid';
import { validateUrl } from '../../utilities'
import { Modal } from 'react-bootstrap';
import { DOMAIN_API, ENDPOINT_POST_URLS } from '../../constants'
import axios from 'axios'
const Form = () => {
    const { dispatch } = useContext(Store);

    const [url, setUrl] = useState("");
    const [count, setCount] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const handleCloseAlert = () => setShowAlert(false);
    const handleShowAlert = () => setShowAlert(true);

    let urlApi = `${DOMAIN_API}${ENDPOINT_POST_URLS}`

    const handleItemChange = (e) => {
        setUrl(e.target.value);
    }

    const HandleItemAdd = () => {

        const isValideUrl = validateUrl(url);

        if (!isValideUrl) {
            handleShowAlert()
            return false
        }
        let data = { key: uuidv4(), url: url, count: count };

        axios.post(urlApi, { data })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(function (error) {
                //inviare errore a logger, tipo sentry, lato server
                console.log(error);
            });

        dispatch({ type: "ADD_ITEM", payload: data });
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
                        <button className="btn btn-primary" onClick={HandleItemAdd}>
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