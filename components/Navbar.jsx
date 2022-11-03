import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex items-center z-20">
        <img src={Logo} alt="/" />
        <div className="ml-10 w-24 flex text-xl space-x-4 items-center rounded ">
          <AiOutlineSearch />
          <input
            type="text"
            className="bg-[#1e1e1e] outline-none "
            placeholder="Search Artists"
          />
        </div>
        <div className="ml-auto block md:hidden">
          <AiOutlineMenu size={25} onClick={handleClick} />
        </div>
        <div>
          <ul
            className={
              nav
                ? "fixed left-0 top-0 w-full h-full z-10 ease-in-out duration-300 bg-[#1e1e1e] text-lg text-center"
                : "fixed left-[-100%] ease-in-out duration-300 "
            }
          >
            <AiOutlineClose
              size={30}
              onClick={handleClick}
              className="absolute top-10 right-4 "
            />

            <li className="mt-8">
              <p>Home</p>
              <Link to="/Charts">
                <p className="mt-4">My Collection</p>
              </Link>
              <p className="mt-4">Radio</p>
              <p className="mt-4">PlayList</p>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
