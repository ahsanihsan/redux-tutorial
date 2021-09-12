import { ADD_A_TODO } from "../Constants/Todos";

export const addATodo = (todo) => (dispatch) => {
  dispatch({
    action: ADD_A_TODO,
    payload: todo,
  });
};
