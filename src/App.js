import React from "react";
import "antd/dist/antd.css";

// React Router Imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Redux Imports
import { Provider } from "react-redux";
import Reducer from "./Redux/Reducer";
import { createStore } from "redux";

// Components import
import ListTodos from "./Screen/ListTodos";
import AddATodo from "./Screen/AddTodo";

const store = createStore(Reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={ListTodos} />
          <Route path="/add" component={AddATodo} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
