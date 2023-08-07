const reducer = (state, action) => {
  if (action.type === "NFTOverview") {
    return {
      ...state,
      name: action.payload.name,
    };
  }

  if (action.type === "TopCollections") {
    return {
      ...state,
      name: action.payload.name,
    };
  }
  if (action.type === "NFTActivity") {
    return {
      ...state,
      name: action.payload.name,
    };
  }
};
export default reducer;
