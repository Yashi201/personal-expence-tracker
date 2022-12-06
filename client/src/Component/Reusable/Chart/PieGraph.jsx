import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

Chart.register(
  Title,
  Tooltip,
  ArcElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const data = {
  labels: ["Red", "green"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 150],
      backgroundColor: ["red", "green"],
      hoverOffset: 4,
    },
  ],
};

function PieGraph() {
  return (
    <>
      <div className="w-1/4 text-white">
        <div className="graph p-5  w-full h-auto">
          <Pie data={data} />
        </div>
      </div>
    </>
  );
}

export default PieGraph;
