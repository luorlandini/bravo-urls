import React, { useContext } from "react";
import { FaTrashAlt } from 'react-icons/fa';


import Store from "./../../store";

const List = () => {

    const { state, dispatch } = useContext(Store);
    const handleUrlClick = (item) => {
        dispatch({ type: "COUNT_VISIT", payload: { key: item.key, url: item.url, count: item.count + 1 } })
    }

    return (
        <div className="row mt-5">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            {state.items.map(item => (
                                <li key={item.key} className="list-group-item">

                                    <a onClick={() => handleUrlClick(item)} href={item.url} rel="noreferrer" target="_blank" class="button">{item.url}</a>
                                    <button
                                        className="float-right btn btn-danger btn-sm"
                                        style={{ marginLeft: 10 }}
                                        onClick={() => dispatch({ type: "REMOVE", payload: item })}

                                    >
                                        <FaTrashAlt />
                                    </button>
                                    <span className="float-right" >Hit counter: {item.count} </span>

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
