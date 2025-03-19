// import { composeWithDevTools } from "@redux-devtools/extension";
// import rootReducer from "./reducer";

// import { createStore } from "redux";

// // Sử dụng devtool
// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;

// Cấu hình dự án với redux tool kit

import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "../components/Filters/filterSlice";
import { todoSlice } from "../components/TodoList/todoSlice";

/**
 * Ưu điểm sử dụng redux tool kit:
 * 1. Không phải viết thêm Combine Reducer
 * 2. Tự động cài đặt các extension như: @redux-devtools/extension => code sẽ gọn gàng hơn
 */

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoSlice.reducer,
  },
});

export default store;
