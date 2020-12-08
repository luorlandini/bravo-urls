import React, { useContext, useState } from "react";
import Store from "./../../store";
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const { dispatch } = useContext(Store);

    const [item, setItem] = useState("");

    const handleItemChange = (e) => {
        setItem(e.target.value);
    }

    const handleItemAdd = () => {

        item.key = uuidv4()

        dispatch({ type: "ADD_ITEM", payload: item });
        setItem("");
    }



    return (
        <div className="row">
            <div className="col-md-12">
                <br />
                <div className="input-group">
                    <input
                        className="form-control"
                        value={item.url}
                        autoFocus={true}
                        placeholder="Enter an url"
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