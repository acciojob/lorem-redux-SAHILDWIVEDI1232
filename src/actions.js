export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await fetch("https://api.lorem.com/ipsum");
      const json = await res.json();

      dispatch({
        type: "FETCH_SUCCESS",
        payload: json
      });

    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
        payload: error.message
      });
    }
  };
};
