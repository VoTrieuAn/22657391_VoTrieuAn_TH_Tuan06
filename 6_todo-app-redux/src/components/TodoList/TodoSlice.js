// const initState = [
//   { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
//   { id: 2, name: "Learn Redux", completed: true, priority: "High" },
//   { id: 3, name: "Learn Javascript", completed: false, priority: "Low" },
// ];
// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo": {
//       return [...state, action.payload];
//     }
//     case "todoList/toggleTodoStatus": {
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     }
//     default:
//       return state;
//   }
// };

import { createSlice } from "@reduxjs/toolkit";

// export default todoListReducer;

const fetchApi = async () => {
  const data = await fetch(
    "https://67da35a635c87309f52b6c10.mockapi.io/todo-app/api/v1/todoList"
  )
    .then((result) => result.json())
    .then((data) => data);
  return data;
};
export const todoSlice = createSlice({
  name: "todoList",
  initialState: await fetchApi(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    }, // Tự động tạo action creators
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
