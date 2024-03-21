import React from "react";
import styles from "./HeadBar.module.css";
import ShareButton from "../../../../assets/ShareButton";
import EditButton from "../../../../assets/EditButton";
import Avatar3 from "../../../../assets/Avatar3.png";
import Avatar4 from "../../../../assets/Avatar4.png";
import Avatar5 from "../../../../assets/Avatar5.png";
import Avatar6 from "../../../../assets/Avatar6.png";
import ArtificiumLogo from "../../../../assets/ArtificiumLogo";
import FolderIcon from "../../../../assets/FolderIcon";
import ChatIcon from "../../../../assets/ChatIcon";

function HeadBar() {
  return (
    <div className="flex flex-col pt-4 px-2 pb-1 justify-between flex-grow">
      <div className="flex justify-between items-center">
        {/* top section  */}
        <div className="flex items-center">
          <div className="pl-2">
            <h5 className="text-Bm text-white font-bold">Orbital Oddysey</h5>
            <h4 className="text-Bsm text-noble-black-300">
              Marketing Campaign for a new TV series Launch
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* <div className="relative">
          <img
            src={Avatar3}
            alt="Avatar3"
            className="w-12 h-12 rounded-xl"
            style={{ left: 0 }} // Fully visible
          />
          <img
            src={Avatar4}
            alt="Avatar4"
            className="w-12 h-12 rounded-xl absolute top-0 left-6"
            style={{ left: "calc(100% - 6px)" }} // Partially overlapping from the right
          />
          <img
            src={Avatar5}
            alt="Avatar5"
            className="w-12 h-12 rounded-xl absolute top-0 left-12"
            style={{ left: "calc(100% - 12px)" }} // Partially overlapping from the right
          />
          <img
            src={Avatar6}
            alt="Avatar6"
            className="w-12 h-12 rounded-xl absolute top-0 left-18"
            style={{ left: "calc(100% - 18px)" }} // Partially overlapping from the right
          />
        </div> */}
          <div className="flex items-center mx-2">
            <ShareButton />
            <h4 className="text-Bsm text-noble-black-300 mx-1">Share</h4>
          </div>
          <div className="mx-2">
            <EditButton />
          </div>
        </div>
      </div>

      <div>
        <ul className={`${styles.headerMenus} flex gap-3`}>
          <li>
            <ArtificiumLogo color="#B6F09C" />
            <h4 className="text-Bsm text-noble-black-300">Artificium</h4>
          </li>
          <li>
            <ChatIcon color="#686B6E" />
            <h4 className="text-Bsm text-noble-black-300">Chat</h4>
          </li>
          <li>
            <FolderIcon color="#686B6E" />
            <h4 className="text-Bsm text-noble-black-300">Library</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeadBar;
