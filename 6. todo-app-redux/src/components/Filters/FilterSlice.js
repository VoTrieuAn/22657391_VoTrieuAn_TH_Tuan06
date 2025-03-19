// const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/searchFilterChange": {
//       return {
//         ...state,
//         search: action.payload,
//       };
//     }
//     case "filter/statusFilterChange": {
//       return {
//         ...state,
//         status: action.payload,
//       };
//     }
//     case "filter/prioritiesFilterChange": {
//       return {
//         ...state,
//         priorities: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default filtersReducer;

import { createSlice } from "@reduxjs/toolkit";
/**
 * Ưu điểm sử dụng redux tool kit:
 * 1. Không cần tạo ra file action riêng lẻ nữa
 * 2. Có thể việt được cú pháp mutation vì react tool kit đã cài đặt sẵn lib là IMMER
 */

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      // Có thể sử dụng mutation
      // Nhưng thực tế nó là immutation
      state.search = action.payload;
    }, // => Tự động tạo ra 1 action với {type: "name/key"} => filters/searchFilterChange
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
