const addMovieNomination = (state = [], action) => {
  switch (action.type) {
    case "ADD_NOMINATION":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          year: action.payload.year,
          image: action.payload.image,
        },
      ];
    case "REMOVE_NOMINATION":
      return state.filter((state) => state.title !== action.payload.title);

    default:
      return state;
  }
};

export default addMovieNomination;
