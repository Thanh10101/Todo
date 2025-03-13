// counterSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodolist } from "../../model/ITodo";


const initialState: ITodolist[] =
  [
    { id: 1, name: 'Learn React', isCompleted: false, priority: 'High' },
    { id: 2, name: 'Learn Redux', isCompleted: false, priority: 'Medium' },
    { id: 3, name: 'Learn JavaScript', isCompleted: false, priority: 'Low' }
  ];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodolist>) => {
      state.push(action.payload);
    }
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;

