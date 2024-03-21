import React from "react";
import styles from "./ChatBar.module.css";
import MicIcon from "../../../../assets/MicIcon";
import AttachIcon from "../../../../assets/AttachIcon";
import SendIcon from "../../../../assets/SendIcon";

function ChatBar() {
  return (
    <div className="flex flex-grow justify-between items-center px-6 rounded-xl bg-noble-black-800">
      <div>
        <MicIcon color="#686B6E" />
      </div>
      <div className="flex flex-grow">
        <input
          className="h-10 flex-grow bg-noble-black-800 ms-5 text-Bsm placeholder-noble-black-600 px-4 text-white"
          placeholder="You can ask me anything! I am here to help."
        ></input>
      </div>
      <div>
        <AttachIcon color="#686B6E" />
      </div>
      <div>
        <SendIcon color="#CDCECF" />
      </div>
    </div>
  );
}

export default ChatBar;
