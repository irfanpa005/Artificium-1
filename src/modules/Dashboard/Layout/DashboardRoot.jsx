import React from "react";
import styles from "./DashboardRoot.module.css";
import SideBar from "../components/SideBar/SideBar";
import HeadBar from "../components/HeadBar/HeadBar";
import ChatBar from "../components/ChatBar/ChatBar";
import ContentBar from "../components/ContentBar/ContentBar";

function Dashboard() {
  return (
    <div className={styles.dashboardHome}>
      <div className={styles.sideBarDiv}>
        <SideBar />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.headBarDiv}>
          <HeadBar />
        </div>
        <div className={styles.mainContentDiv}>
          <ContentBar />
        </div>
        <div className={styles.chatBarDiv}>
          <ChatBar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
