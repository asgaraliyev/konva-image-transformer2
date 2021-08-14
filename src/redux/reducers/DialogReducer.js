const initialState = {
  currentComponentName: null,
  active: false
};
const Index = (state = initialState, action) => {
  if (action.type === "TOGGLE_DIALOG")
    return {
      currentComponentName: action.currentComponentName,
      active: action.active
    };
  return state;
};
export default Index;
