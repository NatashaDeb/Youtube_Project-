import { createSlice } from "@reduxjs/toolkit";

const searchTextSlice = createSlice({
  name: "searchText",
  initialState: "",
  reducers: {
    setSearchText(state, action) {
      return action.payload;
    }
  }
});

export const { setSearchText } = searchTextSlice.actions;
export default searchTextSlice.reducer;
