import React from 'react'
import { Line } from "react-chartjs-2";
import {
  Chart,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";


Chart.register(
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement
  );

function Graph() {

    const [data, setdata] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Income",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "green",
            borderColor: "green",
          },
          {
            label: "Expences",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            backgroundColor: "red",
            borderColor: "red",
          },
        ],
      });

  return (
   <>
   <div className="graph p-5  w-1/2 h-auto">
        <Line data={data} />
      </div>
   
   </>
  )
}

export default Graph