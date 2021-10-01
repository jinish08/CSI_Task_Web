import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import store from "./store";
import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
