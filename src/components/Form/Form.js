import React, { useContext, useState } from "react";
import Store from "./../../store";
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const { dispatch } = useContext(Store);

    const [url, setUrl] = useState("");
    const [key, setKey] = useState("");
    const [count, setCount] = useState(0);

    const handleItemChange = (e) => {
        setUrl(e.target.value);
    }

    const handleItemAdd = () => {

        setKey(uuidv4())
        dispatch({ type: "ADD_ITEM", payload: { key: key, url: url, count: count } });
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
        </div>
    );
}

export default Form