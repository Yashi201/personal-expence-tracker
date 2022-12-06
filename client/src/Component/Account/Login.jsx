import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
function Login() {
  
  const [values, setvalues] = useState({
    email: "",
    passowrd: "",
  });
  const handleLogin = async () => {
    
  };
  
  return (
    <>
    <section
        className="w-full h-full py-52 login_section bg-[#1e293b]"
        style={{
          
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-5">
          <div className="content_main flex justify-center p-5 ">
            <div className="box_login_form p-5 drop-shadow-xl bg-[#e2e8f0]">
              <div className="content_form_heading">
                <h4 className="font-bold text-2xl p-3">Log in </h4>
              </div>
              <div className="form_main_div flex flex-col justify-center">
                <form className="w-full p-4 mb-4" method="POST">
                  <div className="contact_basic_info flex flex-col">
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
                        value={values.email}
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
                        value={values.password}
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
                      onClick={handleLogin}
                    >
                      {/* onClick={handleLogin} */}
                      <span className="capitalize">Sign Up</span>
                    </button>
                  </div>
                </div>

                <div className="content_div flex flex-col justify-center items-center">
                  <div className="heading">
                    <span className="font-semibold">
                      Create New Account ?
                      <NavLink
                        to="/signup"
                        className="capitalize text-blue-700"
                      >
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
                  <div className="error_div">
                    {/* <p className="text-red-700">{errorMsg}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Login