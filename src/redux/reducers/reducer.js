const iState = {
  name: "Prateek",
  last: "Diwedi",
};

const reducer = (state = iState, action) => {
  console.log(action);
  if (action.type === "CHANGE_NAME") {
    return {
      ...state,
      name: action.payload.name,
      last: action.payload.last,
    };
  }
  return state;
};

export default reducer;
