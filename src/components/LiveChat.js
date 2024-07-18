import React, { useEffect, useState } from "react";
import LiveChatComment from "./LiveChatComment";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { generate, getRandomSentence } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.chats);
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addChat({
          name: generate(),
          message: getRandomSentence(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className=" w-full h-[420px] ml-2 border border-black bg-slate-50 rounded-lg overflow-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <LiveChatComment
            key={index}
            name={c.name}
            text={c.message}
          ></LiveChatComment>
        ))}
      </div>
      <form className="w-full p-2 mx-2 border border-black rounded-sm flex"
       onSubmit={(e)=>{
        e.preventDefault();
        console.log("On Form Submitted"+liveMessage);
        dispatch(addChat({
            name: "Natasha",
            message: liveMessage
        }))
        setLiveMessage("");
      }}>
        <input
          type="text"
          className="m-0 p-2 w-96 h-full border border-black"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-slate-200 rounded">send</button>
      </form>
    </>
  );
};

export default LiveChat;
