import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import incomeData from "../../Data/incomeData";
import { PieChart } from "react-minimal-pie-chart";

function Income(props) {
  return (
    <>
      <section className="income_stream">
        <div className="container mx-auto px-5 py-16 ">
          <div className="card_flex_card p-5 w-full border-2 text-black rounded-3xl">
            <div class="flex flex-col text-center w-full mb-10">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-blue-700">
                All {props.heading} Report
              </h1>
            </div>

            <div className="income_income_  flex flex-row justify-center items-center content-center">
              <div className="income_history px-5 py-16 w-3/5">
                <div className="flex flex-row justify-evenly flex-wrap p-6 w-full border-2">
                  <div className="list_div w-full">
                    <ul class="divide-y-2 divide-gray-100 p-5">
                      {incomeData.map((items) => {
                        return (
                          <>
                            <li class="flex justify-between w-full my-2 px-10 py-2 bg-[#F8F0fa] hover:text-black cursor-pointer rounded-lg">
                              <span className="font-bold capitalize ">
                                {items.name}
                              </span>
                              <div className="ammount_money flex items-center content-center">
                                <BsCurrencyDollar color="green" />
                                <span>{items.ammount}</span>
                              </div>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="income_cart px-5 py-10 w-2/5">
                <div className="chart_report w-full  flex flex-row justify-center items-center content-center p-5">
                  <PieChart
                    data={[
                      { title: "One", value: 45, color: "#E38627" },
                      { title: "Two", value: 45, color: "#C13C37" },
                      { title: "Three", value: 10, color: "#6A2135" },
                    ]}
                  />
                </div>
                {/* <DashBordChart heading="All Income Chart" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Income;
