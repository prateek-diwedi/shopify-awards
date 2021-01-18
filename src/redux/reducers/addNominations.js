const addMovieNomination = (state = [], action) => {
  console.log("state insid add nom --->", state);
  switch (action.type) {
    // console.log("inside add nomination reducer", action);
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
