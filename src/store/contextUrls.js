import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Store = React.createContext({
    items: [
        {
            url: "pippo",
            key: uuidv4(),
            click: 0
        }
    ]
});

export default Store;
