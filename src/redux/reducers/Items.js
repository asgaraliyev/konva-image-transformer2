import * as help from "../../helper";
const initialState = [];
const Index = (state = initialState, action) => {
  if (action.type === "ADD_ITEM") {
    return [
      ...state,
      {
        id: help.generateRandomId(),
        ...action.data
      }
    ];
  } else if (action.type === "REMOVE_ITEM") {
    console.log(action.id);
    const index = state.findIndex((item) => {
      return item.id === action.id;
    });
    const myCopy = [...state];
    myCopy.splice(index, 1);
    return myCopy;
  }
  return state;
};
export default Index;
