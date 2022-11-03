import React from "react";
import Home from "../assets/Home.svg";
import playlist from "../assets/playlist.svg";
import radio from "../assets/radio.svg";
import videos from "../assets/videos.svg";
import Lead from "../assets/Lead.jpg";
import Logout from "../assets/Logout.svg";
import { FiPlayCircle } from "react-icons/fi";

import profile from "../assets/profile.svg";
import Heart from "../assets/Heart.png";
import Pic1 from "../assets/Pic1.png";
import Pic2 from "../assets/Pic2.png";
import Pic3 from "../assets/Pic3.png";
import Pic4 from "../assets/Pic4.png";
import Pic5 from "../assets/Pic5.png";

const Charts = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Lead})` }}
      className=" bg-no-repeat opacity-60  bg-cover absolute p-8 top-0 left-0 bg-center w-full h-full"
    >
      <div className="hidden md:flex flex-col bg-[#1A1E1F] p-4 rounded-full w-fit h-fit mt-16 relative">
        <div className="space-y-4">
          <img src={Home} alt="/" className="w-6 h-6 " />
          <img src={playlist} alt="/" className="w-6 h-6" />
          <img src={radio} alt="/" className="w-6 h-6" />
          <img src={videos} alt="/" className="w-6 h-6" />
        </div>
      </div>
      <div className="hidden md:flex flex-col bg-[#1A1E1F] p-4  rounded-full w-fit h-fit mt-8 ">
        <div className="md:space-y-8  md:mx-auto">
          <img src={profile} alt="/" className="w-6 h-6" />
          <img src={Logout} alt="/" className="w-6 h-6" />
        </div>
      </div>
      <div className="md:absolute md:top-24 md:left-28">
        <div className="flex flex-row">
          <img src={Lead} alt="/" className="rounded-3xl hidden md:inline" />
          <p className="ml-4 text-cyan-50 font-bold mt-24 bg text-4xl">
            Tomorrow's Tunes
            <p className="text-base font-semibold text-white mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              alias?
            </p>
            <p className="text-base font-semibold text-white mt-2">
              64 Songs ~ 16 hrs+
            </p>
            <div className="flex mt-6 space-x-2 ">
              <button className="flex items-center hover:bg-amber-600 space-x-2 text-base rounded-3xl py-2 px-4 bg-[#1e1e1e]">
                <FiPlayCircle className="text-amber-500" />
                Play All
              </button>
              <button className="flex items-center hover:bg-amber-600 space-x-2 text-base rounded-3xl py-2 px-4 bg-[#1e1e1e]">
                <img src={radio} alt="/" className="w-6 h-6 " />
                Add to Collection
              </button>
            </div>
          </p>
        </div>
        <div className="mt-14">
          <p className="flex justify-between mt-2 rounded-3xl w-fit md:w-[80vw]  py-2 px-4 bg-[#1e1e1e] items-center">
            <img src={Pic5} alt="/" className="w-11" />
            <img src={Heart} alt="/" className="ml-4" />
            <p className="ml-8 md:ml-48">Take Care</p>
            <p className="ml-8 md:ml-48">Santi</p>
            <p className="ml-8 md:ml-48">2.59</p>
          </p>
          <p className="flex justify-between mt-2 rounded-3xl w-fit md:w-[80vw]  py-2 px-4 bg-[#1e1e1e] items-center">
            <img src={Pic2} alt="/" className="w-11" />
            <img src={Heart} alt="/" className="ml-4" />
            <p className="ml-8 md:ml-48">Broken</p>
            <p className="ml-8 md:ml-48">Tellz</p>
            <p className="ml-8 md:ml-48">1.29</p>
          </p>
          <p className="flex justify-between mt-2 rounded-3xl w-fit md:w-[80vw]  py-2 px-4 bg-[#1e1e1e] items-center">
            <img src={Pic3} alt="/" className="w-11" />
            <img src={Heart} alt="/" className="ml-4" />
            <p className="ml-8 md:ml-48">Money</p>
            <p className="ml-8 md:ml-48">Crown</p>
            <p className="ml-8 md:ml-48">4.19</p>
          </p>
          <p className="flex justify-between mt-2 rounded-3xl w-fit md:w-[80vw]  py-2 px-4 bg-[#1e1e1e] items-center">
            <img src={Pic4} alt="/" className="w-11" />
            <img src={Heart} alt="/" className="ml-4" />
            <p className="ml-8 md:ml-48">Funds Mi</p>
            <p className="ml-8 md:ml-48">Da Loi</p>
            <p className="ml-8 md:ml-48">4.44</p>
          </p>
        </div>
        <p className="flex justify-between rounded-3xl w-fit md:w-[80vw]  py-2 px-4 bg-[#1e1e1e] items-center">
          <img src={Pic1} alt="/" className="w-11" />
          <img src={Heart} alt="/" className="ml-4" />
          <p className="ml-8 md:ml-48">Wetin Man go do</p>
          <p className="ml-8 md:ml-48">Single</p>
          <p className="ml-8 md:ml-48">2.59</p>
        </p>
      </div>
    </div>
  );
};

export default Charts;
