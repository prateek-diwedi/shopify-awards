const nameReducer = (state = "", action) => {
  if (action.type === "CHANGE_NAME") {
    return {
      last: action.payload.last,
    };
  }
  return state;
};

export default nameReducer;
