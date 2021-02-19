import axios from "axios"
export const initialState = {
  people: {}
};

export const getPeople = dispatch => {
  return () => {
    console.log("getPeople");
    axios.get("https://swapi.dev/api/people/1/")
      .then(response => response.data)
      .then(data => dispatch({ type: "GET_PEOPLE", payload: data }))
  }
}

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "GET_PEOPLE":
      return { ...state, people: action.payload };
    case "REMOVE_FROM_CART":
      return { ...state, basket: state.basket.filter(({ id }) => id !== action.payload) };
    case "SET_USER":
      return { ...state, user: action.payload }
    default:
      return state;
  }
}
export default reducer;