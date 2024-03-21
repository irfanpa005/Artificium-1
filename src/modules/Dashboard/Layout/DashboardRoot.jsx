import React from "react";
import styles from "./DashboardRoot.module.css";
import SideBar from "../components/SideBar/SideBar";
import HeadBar from "../components/HeadBar/HeadBar";
import ChatBar from "../components/ChatBar/ChatBar";
import ContentBar from "../components/ContentBar/ContentBar";

function Dashboard() {
  return (
    <div className='flex h-screen bg-noble-black-700 text'>
      <div className='w-72 sm:w-100 p-2'>
        <SideBar />
      </div>
      <div className={`${styles.rightSection} flex flex-col flex-grow justify-between pb-5`}>
        <div>
          <HeadBar />
        </div>
        <div className="flex flex-grow-1 bg-slate-300 overflow-y-scroll contentSection">
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
