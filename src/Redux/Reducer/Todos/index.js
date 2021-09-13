import { ADD_A_TODO, MARK_TODO_STATUS } from "../../Constants/Todos";

const initialState = {
  todosList: [
    {
      task: "Get the groceries",
      status: false,
      priority: "Important",
    },
    {
      task: "Get the groceries 2",
      status: false,
      priority: "Important",
    },
  ],
};

function todosReducer(state = initialState, action) {
  if (action.type === ADD_A_TODO) {
    return {
      ...state,
      todosList: [...state.todosList, action.payload],
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
  return state;
}

export default todosReducer;
