import React from "react";
import userData from "../../../Data/UserData";
import BasicSData from "./BasicSData";



function BasicState() {


  return (
    <>
      <section className="top_dashboard bg-[#fafafa]">
        <div className="container mx-auto px-2 py-16  bg-[#fafafa] rounded-lg">
          <div className="card_flex_card flex flex-row justify-evenly items-center flex-wrap px-5 py-5">
            {userData.map((items) =>{
              return <BasicSData name={items.name} amount={items.ammount} link={items.link}/>
            })}
           
          </div>
        </div>
      </section>
    </>
  );
}

export default BasicState;
