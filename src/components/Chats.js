import React from "react";
import profile from "../assets/profile.jpg";
import lanscape from "../assets/lanscape.jpg";
import Message from "./Message";
import wallpaper from "../assets/wallpaper.jpg";
import { GoSmiley } from "react-icons/go";
import { HiOutlineMicrophone } from "react-icons/hi";
import { VscSearch } from "react-icons/vsc";
import { BsCheck2All } from "react-icons/bs";
import { SlPaperClip } from "react-icons/sl";
import { FiVideo, FiPhone } from "react-icons/fi";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const Chats = () => {
  const messages = [
    {
      // name: "Joe Doe",
      message: "What’s your name?",
      css1: "bg-[#202C33] text-white",
      css2: "justify-start",
      timestamp: "19.22",
    },
    {
      message: "My name is Vicky Pratama S.M",
      css1: "bg-[#146356] text-white",
      css2: "justify-end",
      timestamp: "20.22",
      read: <BsCheck2All className="text-[#38BDF8]" />,
    },
    {
      // name: "Joe Doe",
      message: "Where do you study?",
      css1: "bg-[#202C33] text-white",
      css2: "justify-start",
      timestamp: "20.27",
    },
    {
      message: "I study in Surabaya State University",
      css1: "bg-[#146356] text-white",
      css2: "justify-end",
      timestamp: "21.00",
      read: <BsCheck2All className="text-[#38BDF8]" />,
    },
    {
      // name: "Joe Doe",
      message: "What projects have you done?",
      css1: "bg-[#202C33] text-white",
      css2: "justify-start",
      timestamp: "21.15",
    },
    {
      message: "Website Smart School SIPAPASI, Treize-Dry Laundry and WhatsApp Clone",
      css1: "bg-[#146356] text-white",
      css2: "justify-end",
      timestamp: "21.20",
      read: <BsCheck2All className="text-[#38BDF8]" />,
    },
    {
      // name: "Joe Doe",
      message: "What programming languages ​​and library do you master?",
      css1: "bg-[#202C33] text-white",
      css2: "justify-start",
      timestamp: "21.30",
    },
    {
      message: "Java Script, Node JS, and React Js",
      css1: "bg-[#146356] text-white",
      css2: "justify-end",
      timestamp: "21.45",
      read: <BsCheck2All className="text-gray-300" />,
    },
  ];

  return (
    <div className="hidden md:flex justify-between items-center flex-col w-full bg-[#202C33] border-1 relative rounded-r-[2rem]">
      {/* Header */}
      <div className="flex justify-between items-center px-4 w-full h-[4rem] z-20 bg-[#202C33]">
        <div className="flex items-center">
          <div className="flex w-[3.1rem] h-[3.1rem] bg-[#50CB93] rounded-full shrink-0 ">
            <img src={profile} alt="" className="object-cover rounded-full p-1" />
          </div>
          <div className="pl-4">
            <p className="font-semibold text-white/90">Amadora Qalesya</p>
            <p className="text-[13px] w-[15rem] whitespace-nowrap truncate text-gray-400">Typing...</p>
          </div>
        </div>

        <div className="text-[23px] text-gray-400 flex gap-6">
          <FiVideo className="w-4 h-4" />
          <FiPhone className="w-4 h-4" />
          <TfiLayoutLineSolid className="w-4 h-4 rotate-90" />
          <VscSearch className="w-4 h-4" />
        </div>
      </div>

      {/* Messages */}
      <div className="absolute top-0 w-full h-full">
        <div className="absolute flex w-full h-full lg:hidden rounded-tr-[2rem]">
          <img src={lanscape} alt="" className="object-cover w-full h-full rounded-r-[3rem]" />
        </div>
        <div className="hidden lg:flex absolute w-full h-full rounded-tr-[3rem]">
          <img src={wallpaper} alt="" className="object-cover w-full h-full rounded-r-[3.1rem]" />
        </div>
        <div className="relative z-20 pt-[4.5rem] mt-3 lg:mt-4">
          <div className="flex justify-center mb-3">
            <div className="bg-[#202C33] rounded-[.5rem] px-3 py-2 text-[12px]  text-gray-400">Today</div>
          </div>
          {messages.map((message) => (
            <Message name={message.name} message={message.message} css1={message.css1} css2={message.css2} timestamp={message.timestamp} read={message.read} />
          ))}
        </div>
      </div>

      {/* Input For Message */}
      <div className="relative z-20 bottom-0 bg-[#202C33] w-full px-4 py-2 flex items-center">
        <div className="text-gray-400 flex gap-10">
          <GoSmiley className="w-4 h-4 ml-3" />
          <SlPaperClip className="w-4 h-4 mr-3" />
        </div>
        <input type="text" placeholder="Type a message..." className="w-full mx-4 p-1.5 rounded-[.4rem] text-[14px] pl-4 bg-[#29353c]" />
        <div className="text-gray-400">
          <HiOutlineMicrophone className="w-4 h-4 mx-4" />
        </div>
      </div>
    </div>
  );
};

export default Chats;
