import { createStore, combineReducers } from "redux";
import DialogReducer from "./reducers/DialogReducer";
const reducer = combineReducers({
  DialogReducer
});
const store = createStore(reducer);
export default store;
