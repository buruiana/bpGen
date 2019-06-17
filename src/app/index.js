import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import App from "../components/layouts/App";
import configureStore, { history } from "../redux/store";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const store = configureStore();
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById("react-root")
  );
};

render();
