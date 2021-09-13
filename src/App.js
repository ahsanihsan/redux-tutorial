import React from "react";
import "antd/dist/antd.css";
import "./index.css";

// React Router Imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Redux Imports
import { Provider } from "react-redux";
import Reducer from "./Redux/Reducer";
import { createStore } from "redux";

// Components import
import ListTodos from "./Screen/ListTodos";
import AddATodo from "./Screen/AddTodo";

// Redux Persist
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

const store = createStore(persistedReducer);
let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route path="/" exact component={ListTodos} />
            <Route path="/add" component={AddATodo} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
