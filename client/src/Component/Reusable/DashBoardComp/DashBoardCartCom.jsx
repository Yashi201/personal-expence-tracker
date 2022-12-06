import React from "react";
import ChartDataChart from "../../../Data/ChartDataChart";
import DashBordChart from "../Chart/DashBordChart";

function DashBoardCartCom() {
  return (
    <>
      <section className="top_dashboard bg-[#fafafa]">
        <div className="container mx-auto px-2 py-16  bg-[#fafafa] rounded-lg">
          <div className="chart_Heading text-center my-4">
            <h2 className="text-3xl capitalize font-bold">Chart Formate</h2>
          </div>
          <div className=" card_flex_card flex flex-row items-center flex-wrap px-5 py-5">
            {ChartDataChart.map((items) => {
              return <DashBordChart heading={items.heading} chartdata={items.data}/>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default DashBoardCartCom;
