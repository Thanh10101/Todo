
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import filterSlice from "./slices/filterSlice";

export const stored = configureStore({
    reducer: {
        todo: todoSlice,
        filter: filterSlice
    }
})
export type RootState = ReturnType<typeof stored.getState>;