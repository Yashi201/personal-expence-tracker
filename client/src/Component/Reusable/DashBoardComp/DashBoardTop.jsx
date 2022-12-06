import React, { useState } from "react";
import ExpensesPopUp from "../PopUp/ExpensesPopUp";
import IncomePopUp from "../PopUp/IncomePopUp";
import { GrFormAdd } from "react-icons/gr";

function DashBoardTop() {
  const [incomepop, setincomepop] = useState(false);

  const [expencespop, setexpencepop] = useState(false);

  return (
    <>
      <section className="top_dashboard bg-[#fafafa]">
        <div className="container mx-auto px-5 py-16">
          <div className="heading_content flex flex-row justify-between items-center px-16 py-5 shadow-2xl bg-[#fafafa] rounded-lg">
            <div className="content_heading  px-10 py-2 drop-shadow-2xl">
              <h2 className="uppercase text-2xl font-extrabold text-black">
                DASHBOARD
              </h2>
              <span className="text-green-600 capitalize">
                welcome to your dashboard
              </span>
            </div>
            <div className="controller_allbtn px-5 py-2">
              <div className="main_controller_inner flex flex-row justify-evenly">
                <button
                  className="income px-10 py-2 border-2 text-black mx-3 flex justify-evenly items-center capitalize rounded-lg"
                  onClick={() => setincomepop(true)}
                >
                  <GrFormAdd size={24} className="mr-3" />
                  add income
                </button>
                <button
                  className="expenses px-10 py-2 border-2 text-black mx-3 capitalize rounded-lg flex justify-evenly items-center"
                  onClick={() => setexpencepop(true)}
                >
                  <GrFormAdd size={24} className="mr-3" />
                  add expences
                </button>
              </div>
            </div>
          </div>

          <IncomePopUp open={incomepop} onClose={() => setincomepop(false)} />
          <ExpensesPopUp
            open={expencespop}
            onClose={() => setexpencepop(false)}
          />
        </div>
      </section>
    </>
  );
}

export default DashBoardTop;
