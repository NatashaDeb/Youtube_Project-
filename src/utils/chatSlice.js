import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVECHAT_NO } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats:[]
    },
    reducers:{
        addChat: (state, action) => {
            state.chats.splice(OFFSET_LIVECHAT_NO,1); //after 10 chats it will delete 1 most previous one
            state.chats.unshift(action.payload); //used unshift to push from the first
        },
    },
});

export const{addChat} = chatSlice.actions;
export default chatSlice.reducer;