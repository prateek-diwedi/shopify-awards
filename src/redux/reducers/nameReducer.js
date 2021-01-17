const nameReducer = (state = "", action) => {
  if (action.type === "CHANGE_NAME") {
    return {
      name: action.payload.name,
    };
  }
  return state;
};

export default nameReducer;
