const initialState = {};

const Index = (state = initialState, action) => {
  if (action.type === "CHANGE_CURRENT_ITEM") {
    if (action.item_type === "IMAGE") {
      return {
        item_type: action.item_type,
        name: action.name,
        image_url: action.image_url,
        size: action.size
      };
    }
  } else if (action.type === "CLEAR_CURRENT_ITEM") {
    console.log("CLEAR_CURRENT_ITEM");
    return {};
  }
  return state;
};
export default Index;
