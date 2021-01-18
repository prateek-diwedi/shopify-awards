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

let totalNomination = 0;
export const nomination = (title, image, year) => {
  return {
    type: "ADD_NOMINATION",
    payload: {
      title: title,
      image: image,
      year: year,
      id: ++totalNomination,
    },
  };
};

export const removeNomination = (title, year) => {
  return {
    type: "REMOVE_NOMINATION",
    payload: {
      title: title,
      year: year,
    },
  };
};
