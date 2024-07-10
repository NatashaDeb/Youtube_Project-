import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState:{},
    reducers:{
        cacheResults: (state, action) => {
           // state = {...action.payload, ...state} not working this way
            state = Object.assign(state, action.payload); //merging 2 objects
        },
    },
});

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;