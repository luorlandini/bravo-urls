import React, { useContext, useReducer } from "react";
import Form from "./components/Form";
import List from "./components/List"
import Store from "./store";
import reducer from "./reducer/";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const globalStore = useContext(Store);
  const [state, dispatch] = useReducer(reducer, globalStore);

  return (
    <Store.Provider value={{ state, dispatch }}>
      <div className="container">
        <Form />
        <List />
      </div>
    </Store.Provider>
  );
}

export default App;
