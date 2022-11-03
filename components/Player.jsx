import React from "react";
import Pic1 from "../assets/Pic1.png";
import {
  FiSkipBack,
  FiSkipForward,
  FiShuffle,
  FiRepeat,
  FiPlayCircle,
} from "react-icons/fi";
import { GiSpeaker } from "react-icons/gi";

const Player = () => {
  return (
    <div className="fixed bottom-0 w-full p-6 z-10 bg-[#1e1e1e] container items-center mx-auto md:inline hidden bg-opacity-20 backdrop-blur-3xl rounded drop-shadow-2xl">
      <div className="flex">
        <img src={Pic1} alt="/" className="w-11" />
        <div className="flex flex-col ml-4">
          <p className="font-bold">Wetin man go do</p>
          <p>Kwise</p>
        </div>

        <div className="flex ml-[25%] space-x-6 items-center mx-auto">
          <FiShuffle size={21} />
          <FiSkipBack size={22} />
          <FiPlayCircle size={25} />
          <FiSkipForward size={22} />
          <FiRepeat size={21} />
        </div>
        <div className="flex space-x-1 items-center ml-auto">
          <GiSpeaker />
          <input type="range" />
        </div>
      </div>
    </div>
  );
};

export default Player;
