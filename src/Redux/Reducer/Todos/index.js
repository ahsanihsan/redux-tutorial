import {
  DELETE_A_TODO,
  ADD_A_TODO,
  MARK_TODO_STATUS,
} from "../../Constants/Todos";

const initialState = {
  todosList: [],
};

function todosReducer(state = initialState, action) {
  if (action.type === ADD_A_TODO) {
    return {
      ...state,
      todosList: [action.payload, ...state.todosList],
    };
  }
  if (action.type === MARK_TODO_STATUS) {
    let newObject = [...state.todosList];
    newObject[action.payload.index].status = action.payload.status;
    return {
      ...state,
      todosList: newObject,
    };
  }
  if (action.type === DELETE_A_TODO) {
    let newObject = [...state.todosList];
    let index = newObject.findIndex((item) => {
      return item.key === action.payload;
    });
    newObject.splice(index, 1);
    return {
      ...state,
      todosList: newObject,
    };
  }
  return state;
}

export default todosReducer;
