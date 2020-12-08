import React, { useContext } from "react";
import { Button } from 'react-bootstrap';
import Store from "./../../store";

const List = () => {

    const { state, dispatch } = useContext(Store);

    return (
        <div className="row mt-5">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            {state.items.map(item => (
                                <li key={item.key} className="list-group-item">

                                    <Button href={item.url} variant="link">{item.url}</Button>
                                    <button
                                        className="float-right btn btn-danger btn-sm"
                                        style={{ marginLeft: 10 }}
                                        onClick={() => dispatch({ type: "REMOVE", payload: item })}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List
