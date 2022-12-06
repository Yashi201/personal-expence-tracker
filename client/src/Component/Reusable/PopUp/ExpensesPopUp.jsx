import React, {useState} from "react";
import { RxCross1 } from "react-icons/rx";


function ExpensesPopUp({ open, onClose }) {
  const [values, setvalues] = useState({
    ammount: "",
    desc: "",
    date: "",
    ammountsource: "",
  });

  const addNewIncomeTracker = () =>{
    console.log("add expences")
  }

  if (!open) return null;

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/2 my-6 mx-auto max-w-screen-2xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="p-5 border-b border-solid border-gray-300 rounded-t ">
            <div className="header_pop_up_content flex flex-row items-start content-center justify-between ">
                <h3 className="text-3xl font-semibold">Add New Expences</h3>
                <button
                  className="bg-transparent border-5 px-5 py-2 items-center text-black"
                  onClick={onClose}
                >
                  <RxCross1 size={24} />
                </button>
              </div>
            </div>
            <div className="relative p-6 flex-auto">
              <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={values.ammount}
                    onChange={(event) => {
                      setvalues((prev) => ({
                        ...prev,
                        ammount: event.target.value,
                      }));
                    }}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Description
                  </label>
                  <input
                    type="text"
                    id="desc"
                    name="desc"
                    value={values.desc}
                    onChange={(event) => {
                      setvalues((prev) => ({
                        ...prev,
                        desc: event.target.value,
                      }));
                    }}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                {/* date picker */}
                <div class="relative mb-4">
                  <label for="date" class="leading-7 text-sm text-gray-600">
                    Select Data
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={values.date}
                    onChange={(event) => {
                      setvalues((prev) => ({
                        ...prev,
                        date: event.target.value,
                      }));
                    }}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div class="relative mb-4">
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select an category
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={values.ammountsource}
                    onChange={(event) => {
                      setvalues((prev) => ({
                        ...prev,
                        ammountsource: event.target.value,
                      }));
                    }}
                  >
                    <option selected>Choose a category</option>
                    <option value="Job">Job</option>
                    <option value="Freelanceing">freelanceing</option>
                    <option value="Home">Home</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={addNewIncomeTracker}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpensesPopUp;
