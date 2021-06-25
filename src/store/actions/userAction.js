export const fetchUsers = () => {
  return (dispatch, getState) => {
    const url = "https://randomuser.me/api/?results=28";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "FETCH_USERS",
          users: data.results,
        });
      });
  };
};
