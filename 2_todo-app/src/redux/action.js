// action static (hành động tĩnh)
// export const addTodoAction = {
//   type: "todoList/addTodo",
//   payload: { id: 4, name: "Learn Football", completed: false, priority: "Low" },
// };

// action creators ==> function
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleTodoStatus = (id) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: id,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filter/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filter/statusFilterChange",
    payload: status,
  };
};

export const prioritiesFilterChange = (priorities) => {
  return {
    type: "filter/prioritiesFilterChange",
    payload: priorities,
  };
};
