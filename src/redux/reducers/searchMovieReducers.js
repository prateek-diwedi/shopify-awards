const SEARCH_MOVIE_Reducer = (state = "", action) => {
  if (action.type === "SEARCH_MOVIE") {
    return {
      data: action.payload,
    };
  }
  return state;
};

export default SEARCH_MOVIE_Reducer;
