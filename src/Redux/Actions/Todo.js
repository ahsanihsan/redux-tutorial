import { ADD_A_TODO, MARK_TODO_STATUS } from "../Constants/Todos";

export const addATodo = (todo) => (dispatch) => {
  dispatch({
    action: ADD_A_TODO,
    payload: todo,
  });
};

export const markTodoStatus = (data) => {
  return { action: MARK_TODO_STATUS, payload: data };
};
