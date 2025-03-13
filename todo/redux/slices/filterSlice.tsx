import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter } from "../../model/ITodo";

const initialState: IFilter = {
    search: "",
    status: "All",
    priority: []
}
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        searchFilter: (state, action: PayloadAction<IFilter>) => {
            state.search = action.payload.search;
        },
        statusFilter: (state, action: PayloadAction<IFilter>) => {
            state.status = action.payload.status;
        },
        priorityFilter: (state, action: PayloadAction<IFilter>) => {
            state.priority = action.payload.priority;
        },
    },
});

export const { searchFilter, statusFilter, priorityFilter } = filterSlice.actions;
export default filterSlice.reducer;