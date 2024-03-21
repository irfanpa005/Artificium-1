import React from "react";
import styles from "./DashboardRoot.module.css";
import SideBar from "../components/SideBar/SideBar";
import HeadBar from "../components/HeadBar/HeadBar";
import ChatBar from "../components/ChatBar/ChatBar";
import ContentBar from "../components/ContentBar/ContentBar";

function Dashboard() {
  return (
    <div className='flex h-screen bg-noble-black-700 text'>
      <div className="px-2 pb-2">
        <SideBar />
      </div>
      <div className={`${styles.rightSection} flex flex-col justify-between pb-2`}>
        <div>
          <HeadBar />
        </div>
        <div className={`${styles.contentBarDiv}`}>
          <ContentBar />
        </div>
        <div>
          <ChatBar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
