const initialState = {
  currentComponentName: null,
  active: true
};
export default function Index(state = initialState, action) {
  console.log(state, action);
  return state;
}
