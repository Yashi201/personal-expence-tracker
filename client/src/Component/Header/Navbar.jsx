import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [Navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", changeBackground);
  const NavData = [
    {
      Name: "Home",
      Link: "#top",
    },
    {
      Name: "About Us",
      Link: "#aboutus",
    },
    {
      Name: "Serivce",
      Link: "#serivce",
    },
    {
      Name: "Benifite",
      Link: "#benifite",
    },
  ];

  return (
    <>
      <header
        className={
          Navbar
            ? "navbar Nav_Scroll_active sticky top-0 z-50"
            : "navbar sticky top-0 z-50"
        }
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 inactive">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Expence Tracker</span>
          </NavLink>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {NavData.map((items) => {
              return (
                <>
                  <HashLink
                    to={items.Link}
                    smooth
                    className="font-semibold text-black hover:text-green-500 px-5 py-2 mx-5 navlink"
                  >
                    {items.Name}
                  </HashLink>
                </>
              );
            })}
          </nav>

          <div className="butoon flex flex-row">
            <div className="login_button mr-2">
              <button className="inline-flex items-center bg-gray-100 border-2 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 ">
                <NavLink to="/login" className="capitalize">
                  login
                </NavLink>
              </button>
            </div>
            <div className="signup_button ml-2">
              <button
                className="inline-flex items-center bg-gray-100 border-2 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                // onClick={signOut}
              >
                <NavLink to="/signup" className="capitalize">
                  Register
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
