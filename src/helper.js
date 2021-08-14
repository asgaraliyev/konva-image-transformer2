import Store from "./redux/Index";
export function generateRandomId() {
  return Math.floor(Math.random() * 9999999);
}
export function saveNewItem() {
  const store = Store.getState();
  const currentItem = store.CurrentItem;

  Store.dispatch({ type: "ADD_ITEM", data: currentItem });
  Store.dispatch({
    type: "TOGGLE_DIALOG",
    currentComponentName: null,
    active: false
  });
  Store.dispatch({
    type: "TOGGLE_DIALOG",
    currentComponentName: null,
    active: false
  });
  Store.dispatch({
    type: "CLEAR_CURRENT_ITEM"
  });
}
