import React from "react";
import { NavLink } from "react-router-dom";
// import DashBordChart from "../Chart/DashBordChart";

function BasicSData(props) {
  return (
    <>
      <div className="card_main_card xl:w-w-1/3 md:w-2/5 m-4 shadow-xl cursor-pointer" >
        <div className="card_inner_card border-2 border-green-500 p-6 rounded-[15px]">
          <div className="flex flex-row justify-center  items-center content-center py-2 px-4">
            <div className="right_card_part">
              <h2 className="text-2xl text-green-500 font-medium title-font mb-2">
                {props.name}
              </h2>
              <h2 className="leading-relaxed font-bold p-4 text-3xl text-black text-center">
                {props.amount}
              </h2>
              <p className="leading-relaxed font-semibold text-center text-black hover:text-blue-500 ">
                <NavLink to={props.link}>View Report</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicSData;
