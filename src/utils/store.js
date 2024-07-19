import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchTextSlice from "./searchTextSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
        searchText: searchTextSlice,
    }
});

export default store;