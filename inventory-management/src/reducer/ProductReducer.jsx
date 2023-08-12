export const productReducer = (state, action) => {
    switch (action.type) {
      case "add_product":
        return [ ...state, action.payload ];
      default:
        return state;
    }
  };