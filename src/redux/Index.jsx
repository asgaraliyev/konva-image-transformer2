import { createStore } from "redux";
import DialogReducer from "./reducers/DialogReducer";
const store = createStore(
  DialogReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
