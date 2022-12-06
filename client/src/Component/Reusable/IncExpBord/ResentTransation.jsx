import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

function ResentTransation(props) {
  return (
    <>
      <section className="income_stream">
        <div className="container mx-auto px-5 py-16 ">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-blue-700">
              Resent {props.heading} Transation History
            </h1>
          </div>
          <div className="transation_history">
            <div className="transation_div card_flex_card flex flex-row justify-evenly flex-wrap p-2 w-full border-2 text-black rounded-3xl">
              <div className="list_div w-1/2">
                <ul class="divide-y-2 divide-gray-100 p-5">
                  <li class="flex justify-between w-full my-2 px-5 py-5 bg-[#F8F0E3] hover:text-black cursor-pointer rounded-lg">
                    <span className="font-bold capitalize ">job</span>
                    <div className="ammount_money flex items-center content-center">
                      <BsCurrencyDollar color="green" />
                      <span>50000</span>
                    </div>
                  </li>
                  <li class="flex justify-between w-full my-2 px-5 py-5 bg-[#F8F0E3] hover:text-black cursor-pointer rounded-lg">
                    <span className="font-bold capitalize ">job</span>
                    <div className="ammount_money flex items-center content-center">
                      <BsCurrencyDollar color="green" />
                      <span>50000</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResentTransation;
