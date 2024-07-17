import React, { useEffect } from "react";
import LiveChatComment from "./LiveChatComment";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { generate, getRandomSentence} from "../utils/helper";


const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.chats);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API is Polling");
      dispatch(
        addChat({
          name: generate(),
          message:getRandomSentence(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <div className=" w-full h-[500px] ml-2 border border-black bg-slate-50 rounded-lg overflow-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <LiveChatComment key={index} name={c.name} text={c.message}></LiveChatComment>
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
