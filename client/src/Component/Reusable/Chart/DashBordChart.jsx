import React from "react";
import { PieChart } from "react-minimal-pie-chart";
// import { Doughnut } from 'react-chartjs-2';
// import {Chart, ArcElement} from 'chart.js'


function DashBordChart({ heading }) {
  // console.log(props.data)

  // const mychartvalue = ;

  return (
    <>
      <div className="card_main_card xl:w-1/3 md:w-1/2 p-4">
        <div className="card_inner_card border-4 border-green-500 p-6 rounded-[15px] flex flex-col items-center content-center">
          <div className="heading_chart_chart_data text-center mb-4">
            <h2 className="text-2xl capitalize font-bold px-5 py-2">
              {heading}
            </h2>
          </div>
          <div className="flex flex-row justify-center items-center content-center py-2 px-4">
            <PieChart
              data={[
                { title: "One", value: 45, color: "#E38627" },
                { title: "Two", value: 45, color: "#C13C37" },
                { title: "Three", value: 10, color: "#6A2135" },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBordChart;
