import { ADD_A_TODO, MARK_TODO_STATUS } from "../Constants/Todos";

export const addATodo = (todo) => (dispatch) => {
  dispatch({
    type: ADD_A_TODO,
    payload: todo,
  });
};

export const markTodoStatus = (data) => {
  return { type: MARK_TODO_STATUS, payload: data };
};
