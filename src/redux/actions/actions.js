export const anotherName = (name) => {
  return async (dispatch) => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/" + name.name
    );
    const res2 = await data.json().then((res2) => {
      dispatch({
        type: "CHANGE_NAME",
        payload: { name: res2[0].name, last: res2[0].username },
      });
    });
  };
};

export const movieName = (name) => {
  return async (dispatch) => {
    const data = await fetch(
      "http://www.omdbapi.com/?s=" + name + "&apikey=3ba4821"
    );
    const res2 = await data.json().then((res2) => {
      dispatch({
        type: "SEARCH_MOVIE",
        payload: res2,
      });
    });
  };
};
