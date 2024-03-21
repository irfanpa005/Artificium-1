import React from "react";
import styles from "./SideBar.module.css";
import Avatar1 from "../../../../assets/Avatar1.png";
import DropDownArrow from "../../../../assets/DropDownArrow";
import Search from "../../../../assets/Search";
import TextS from "../../../../assets/TextS";
import BillIcon from "../../../../assets/BillIcon";
import Square from "../../../../assets/Square";
import Polygon from "../../../../assets/Polygon";
import Triangle from "../../../../assets/Triangle";
import AddIcon from "../../../../assets/AddIcon";

function SideBar() {
  return (
    <div className="bg-noble-black-800 h-full pt-4 px-2 pb-2 rounded-20 flex flex-col">
      <div className="flex-grow flex flex-col justify-between">
        <div className="flex justify-between items-center bg">
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
          <div className="flex justify-between items-center">
            <Search />
            <p className="text-Bsm text-white flex-grow pl-6">Search</p>
            <TextS />
          </div>
          <div className="flex justify-between items-center">
            <BillIcon />
            <p className="text-Bsm text-white flex-grow pl-6">Billing</p>
          </div>
        </div>

        <div className="flex flex-col flex-grow justify-around">
          <h5 className="text-Bsm text-noble-black-400">PROJECTS</h5>
          <div className="flex justify-between items-center">
            <Square color={'stem-green-500'} />
            <p className="text-Bsm text-white flex-grow pl-6">Orbital Oddysey</p>
          </div>
          <div className="flex justify-between items-center">
            <Triangle color={'red-power-600'} />
            <p className="text-Bsm text-white flex-grow pl-6">Digital Product Launch</p>
          </div>
          <div className="flex justify-between items-center">
            <Square color={'happy-orange-600'} />
            <p className="text-Bsm text-white flex-grow pl-6">Brand Refresh</p>
          </div>
          <div className="flex justify-between items-center">
            <Polygon color={'heisenburg-blue-500'} />
            <p className="text-Bsm text-white flex-grow pl-6">Social Media Strategy</p>
          </div>
          <div className="flex justify-between items-center">
            <AddIcon color={'noble-black-500'} />
            <p className="text-Bsm text-white flex-grow pl-6">Add new project</p>
          </div>
        </div>



      </div>
    </div>
  );
}

export default SideBar;
