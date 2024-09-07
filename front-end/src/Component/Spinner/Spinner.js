import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { BsEmojiDizzy } from "react-icons/bs";
import { CiBitcoin } from "react-icons/ci";
import { FaCircleInfo } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function Spinner() {
  const navigate = useNavigate();
  const [shani,] = useState(2000000); // Example initial value of shani

  // Determine the level and color based on shani value
  let levelText = "Bronze";
  let helloLevel = "1";
  let clrLevelColor = "bg-yellow-500"; // Default color
  let clrLevelWidth = "w-[7%]"; // Default width

  if (shani >= 5000000) {
    levelText = "Winner";
    helloLevel = "11";
    clrLevelColor = "bg-yellow-600";
    clrLevelWidth = "w-[100%]";
  } else if (shani >= 4500000) {
    levelText = "Heroic";
    helloLevel = "10";
    clrLevelColor = "bg-yellow-600";
    clrLevelWidth = "w-[90%]";
  } else if (shani >= 4000000) {
    levelText = "Master";
    helloLevel = "9";
    clrLevelColor = "bg-yellow-600";
    clrLevelWidth = "w-[80%]";
  } else if (shani >= 3500000) {
    levelText = "Ace";
    helloLevel = "8";
    clrLevelColor = "bg-yellow-600";
    clrLevelWidth = "w-[70%]";
  } else if (shani >= 3000000) {
    levelText = "Diamond";
    helloLevel = "7";
    clrLevelColor = "bg-yellow-600";
    clrLevelWidth = "w-[60%]";
  } else if (shani >= 2500000) {
    levelText = "Crown";
    helloLevel = "6";
    clrLevelColor = "bg-yellow-600";
    clrLevelWidth = "w-[50%]";
  } else if (shani >= 2000000) {
    levelText = "Firster";
    helloLevel = "5";
    clrLevelColor = "bg-yellow-600";
    clrLevelWidth = "w-[40%]";
  } else if (shani >= 1500000) {
    levelText = "Platinium";
    helloLevel = "4";
    clrLevelColor = "bg-yellow-600";
    clrLevelWidth = "w-[30%]";
  } else if (shani >= 1000000) {
    levelText = "Gold";
    helloLevel = "3";
    clrLevelColor = "bg-yellow-600";
    clrLevelWidth = "w-[20%]";
  } else if (shani >= 500000) {
    levelText = "Silver"; 
    helloLevel = "2";
    clrLevelColor = "bg-yellow-600";
    clrLevelWidth = "w-[15%]";
  }

  return (
    <>
      <div className="flex ">
        <div
          className="h-auto w-[48%]" // Default background color
          onClick={() => navigate("/level", { state: {} })}
        >
          <div className="flex items-center p-3 ms-2">
            <p className="text-white font-medium">
              {levelText}
            </p>
            <MdNavigateNext className="text-white text-xl" />
            <p className="text-white ms-12">
              {helloLevel}
              <span className="text-gray-400">/11</span>
              
            </p>
          </div>
          <div className="h-[10px] w-[80%] bg-[#494848] rounded-full mx-auto">
            <div
              className={`h-[10px] ${clrLevelColor} ${clrLevelWidth} rounded-full`}
            ></div>
          </div>
        </div>
        <div className="h-[7vh] w-[50%] bg-[#494848] p-2 mt-4 rounded-full">
          <div className="flex items-center justify-evenly">
            <BsEmojiDizzy className="text-white text-[27px] border-r pe-2" />
            <CiBitcoin className="text-white bg-[#e9a830] ms-1 me-1 rounded-full text-[20px]" />
            <p className="font-medium text-white">{shani}</p>
            <FaCircleInfo className="text-gray-400 text-[30px] border-r pe-2 ms-1" />
            <IoMdSettings className="text-white ms-1 text-[20px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Spinner;
