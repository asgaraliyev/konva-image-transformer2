import { createStore, combineReducers } from "redux";
import DialogReducer from "./reducers/DialogReducer";
import CurrentItem from "./reducers/CurrentItem";
import Items from "./reducers/Items";
const reducer = combineReducers({
  DialogReducer,
  Items,
  CurrentItem
});
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
