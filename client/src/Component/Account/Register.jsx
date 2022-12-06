import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signUp } from "../../helper/AuthHelper";

function Register() {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
  });

  const navigate = useNavigate()
  const { name, email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    //setvalues({ ...values });
    signUp({ name, email, password })
      .then((data) => {
        setvalues({
          ...values,
          name: "",
          email: "",
          password: "",
        });
      })
      .catch(()=>{
        console.log("It's scueceess");
        navigate("/login")
      });
  };

  return (
    <>
      <section
        className="w-full h-full py-40 login_section bg-[#1e293b]"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-5 h-full">
          <div className="content_main flex content-center items-center justify-center p-5 ">
            <div className="box_login_form px-5 py-8 drop-shadow-xl bg-[#e2e8f0]">
              <div className="content_form_heading">
                <h4 className="font-bold text-2xl p-3">Create Account </h4>
              </div>
              <div className="form_main_div flex flex-col justify-center px-8 py-4 mt-5">
                <form className="w-full p-4 mb-4" method="POST">
                  <div className="contact_basic_info flex flex-col">
                    <div className="p-2 w-full">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600 capitalize font-medium"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => {
                          setvalues((prev) => ({
                            ...prev,
                            name: event.target.value,
                          }));
                        }}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>

                    <div className="p-2 w-full">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600 capitalize font-medium"
                      >
                        email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(event) => {
                          setvalues((prev) => ({
                            ...prev,
                            email: event.target.value,
                          }));
                        }}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>

                    <div className="p-2 w-full">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600 capitalize font-medium"
                      >
                        password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(event) => {
                          setvalues((prev) => ({
                            ...prev,
                            password: event.target.value,
                          }));
                        }}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                </form>
                <div className="my_sumit_btn">
                  <div className="w-full m-2 p-2 flex justify-center items-center">
                    <button
                      className="text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      onClick={handleSubmit}
                      // disabled={submitButtonDisable}
                    >
                      <span className="capitalize">Sign Up</span>
                    </button>
                  </div>
                </div>
                <div className="content_div flex flex-col justify-center items-center">
                  <div className="heading">
                    <span className="font-semibold">
                      Already have an account?{" "}
                      <NavLink to="/login" className="capitalize text-blue-700">
                        Login
                      </NavLink>
                    </span>
                  </div>
                  <div className="paragraph p-2">
                    <p className="text-xs">
                      By continuing, you agree to our Terms of Service and
                      Privacy Policy
                    </p>
                  </div>
                  <div className="error_msg">
                    {/* <p className="text-red-700 font-semibold">{errorMsg}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
