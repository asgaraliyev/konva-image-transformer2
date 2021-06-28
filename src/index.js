import { StrictMode } from "react";
import ReactDOM from "react-dom";
import store from "./redux/Index.jsx";
import { Provider } from "react-redux";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
