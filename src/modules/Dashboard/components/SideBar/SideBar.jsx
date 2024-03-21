import React from "react";
import styles from "./SideBar.module.css";
import Avatar1 from "../../../../assets/Avatar1.png";
import Avatar2 from "../../../../assets/Avatar2.png";
import DropDownArrow from "../../../../assets/DropDownArrow";
import Search from "../../../../assets/Search";
import TextS from "../../../../assets/TextS";
import BillIcon from "../../../../assets/BillIcon";
import Square from "../../../../assets/Square";
import Polygon from "../../../../assets/Polygon";
import Triangle from "../../../../assets/Triangle";
import CircleFilled from "../../../../assets/CircleFilled";
import AddIcon from "../../../../assets/AddIcon";
import SettingsIcon from "../../../../assets/SettingsIcon";
import tw from "tailwind-styled-components";

function SideBar() {
  return (
    <div className="bg-noble-black-800 h-full pt-4 px-2 pb-2 rounded-xl flex flex-col justify-between">
      <div className="flex flex-col flex-grow justify-between">
        <div className={`${styles.topCol} flex flex-col`}>
          <div className="flex justify-between items-center">
            <img className={styles.avatar} src={Avatar1} alt="Avatar" />
            <div className="flex-grow pl-2">
              <h5 className="text-Bm text-white">Intellisys</h5>
              <h4 className="text-Bxs text-stem-green-500">12 members</h4>
            </div>
            <div>
              <DropDownArrow />
            </div>
          </div>

          <div className="flex flex-col flex-grow justify-around ">
            <h5 className="text-Bsm text-noble-black-400">GENERAL</h5>
            <div className="flex justify-between items-center pl-2">
              <Search />
              <p className="text-Bsm text-white flex-grow pl-6">Search</p>
              <TextS />
            </div>
            <div className="flex justify-between items-center pl-2">
              <BillIcon />
              <p className="text-Bsm text-white flex-grow pl-6">Billing</p>
            </div>
          </div>

          <ul
            className={`${styles.projectsUl} flex flex-col flex-grow justify-around`}
          >
            <h5 className="text-Bsm text-noble-black-400">PROJECTS</h5>
            <li className="flex justify-between items-center">
              <Square color="#B6F09C" />
              <p className="text-Bsm text-white flex-grow pl-6">
                Orbital Oddysey
              </p>
            </li>
            <li className="flex justify-between items-center">
              <Triangle color="#D0302F" />
              <p className="text-Bsm text-white flex-grow pl-6">
                Digital Product Launch
              </p>
            </li>
            <li className="flex justify-between items-center">
              <Square color="#E26F20" />
              <p className="text-Bsm text-white flex-grow pl-6">
                Brand Refresh
              </p>
            </li>
            <li className="flex justify-between items-center">
              <Polygon color="#82DBF7" />
              <p className="text-Bsm text-white flex-grow pl-6">
                Social Media Strategy
              </p>
            </li>
            <li className="flex justify-between items-center">
              <AddIcon color={"noble-black-500"} />
              <p className="text-Bsm text-white flex-grow pl-6">
                Add new project
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center bg-gradient-BlShade border-t border-glass-stroke rounded-xl">
          <div className="relative">
            <img className={styles.avatar} src={Avatar2} alt="Avatar2" />
            <div className="absolute top-0 right-0">
              <div className="relative">
                <CircleFilled color="#4AC97E" />
                <div className="absolute inset-0 flex items-center justify-center border-2 border-black rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex-grow pl-2">
            <h5 className="text-Bm text-white">Ryan Lee</h5>
            <h4 className="text-Bxs text-stem-green-500">Premium</h4>
          </div>
          <div>
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
