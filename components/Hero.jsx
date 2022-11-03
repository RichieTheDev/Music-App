import React from "react";
import Home from "../assets/Home.svg";
import playlist from "../assets/playlist.svg";
import radio from "../assets/radio.svg";
import videos from "../assets/videos.svg";
import Logout from "../assets/Logout.svg";
import profile from "../assets/profile.svg";
import Heron from "../assets/Heron.png";
import Frame4 from "../assets/Frame4.png";
import Track1 from "../assets/Track1.png";
import Track2 from "../assets/Track2.png";
import Track3 from "../assets/Track3.png";
import Heart from "../assets/Heart.png";
import { AiFillHeart } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="relative items-center w-full ">
        <div className="hidden md:flex  flex-col bg-[#1A1E1F] p-4 rounded-full w-fit h-fit mt-8 ">
          <div className="space-y-4">
            <img src={Home} alt="/" className="w-6 h-6" />
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
        <div className="md:absolute md:top-0 md:left-24 items-center mt-8 md:mt-0 bg-[#609EAF] w-full md:w-[65%] rounded-3xl">
          <div className="flex justify-between">
            <div className="pl-4 p-4">
              <p className="text-sm pl-4 pt-4">Currated playlist</p>
              <p className="pl-4 font-bold text-5xl mt-16">R & B Hits</p>
              <p className="pl-4  mt-4">
                All mine,Lie again,pretty call me everyday.
              </p>
              <p className="pl-4 ">Out of time,No love,Bad habit,</p>
              <p className="pl-4  mb-16">and so much more</p>
              <p className="flex items-center space-x-4 pl-6">
                <img src={Frame4} alt="/" />
                <AiFillHeart />
                <p>35k Likes</p>
              </p>
            </div>
            <div className="md:flex md:relative hidden">
              <img src={Heron} alt="/" />
            </div>
          </div>
        </div>
        <div className="md:absolute top-[27rem] md:top-0 md:left-[60rem]">
          <p className="font-semibold text-2xl md:inline hidden ml-4">
            Top Charts
          </p>
          <div className="bg-[#1A1E1F] hidden md:inline w-full p-1 mt-4 cursor-pointer">
            <div className="flex space-x-2  items-center">
              <img src={Track1} alt="/" />
              <div className="flex flex-col p-2">
                <p className="font-normal text-base pt-1">Golden Ages of 80s</p>
                <p className="text-sm pt-1 font-light">Sean Swadder</p>
                <p className="text-xs pt-1">2.35</p>
              </div>
              <div className="flex pl-10  pr-8 items-center">
                <img src={Heart} alt="/" />
              </div>
            </div>
          </div>
          <div className="bg-[#1A1E1F] hidden md:inline w-full p-1 mt-2 cursor-pointer">
            <div className="flex space-x-2  items-center">
              <img src={Track2} alt="/" />
              <div className="flex flex-col p-2">
                <p className="font-normal text-base pt-1">Reggae n Blues</p>
                <p className="text-sm pt-1 font-light">DJ YK Mule</p>
                <p className="text-xs pt-1">1.48</p>
              </div>
              <div className="flex pl-16  pr-8 items-center">
                <img src={Heart} alt="/" />
              </div>
            </div>
          </div>
          <Link to="/Charts">
            <div className="bg-[#1A1E1F] hidden md:inline w-full p-1 mt-2 cursor-pointer">
              <div className="flex space-x-2  items-center">
                <img src={Track3} alt="/" />
                <div className="flex flex-col p-2">
                  <p className="font-normal text-base pt-1">Tomorrow's Tunes</p>
                  <p className="text-sm pt-1 font-light">Obi Datti</p>
                  <p className="text-xs pt-1">2023</p>
                </div>
                <div className="flex pl-12  pr-8 items-center">
                  <img src={Heart} alt="/" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Hero;
