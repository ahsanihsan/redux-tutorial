import React from "react";
import { Provider } from "react-redux";
import Reducer from "./Redux/Reducer";
import { createStore } from "redux";

const store = createStore(Reducer);

function App() {
  return <Provider store={store}></Provider>;
}

export default App;
