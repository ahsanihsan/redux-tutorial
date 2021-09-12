import { ADD_A_TODO } from "../../Constants/Todos";

const initialState = { todos: [] };

function todosReducer(state = initialState, action) {
  if (action.type === ADD_A_TODO) {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  }
  return state;
}

export default todosReducer;
