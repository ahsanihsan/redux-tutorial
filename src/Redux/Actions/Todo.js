import {
  ADD_A_TODO,
  MARK_TODO_STATUS,
  DELETE_A_TODO,
} from "../Constants/Todos";

export const addATodo = (todo) => {
  return {
    type: ADD_A_TODO,
    payload: todo,
  };
};

export const deleteATodo = (key) => {
  return {
    type: DELETE_A_TODO,
    payload: key,
  };
};

export const markTodoStatus = (data) => {
  return { type: MARK_TODO_STATUS, payload: data };
};
