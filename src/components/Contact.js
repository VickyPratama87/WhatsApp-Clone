import React from "react";

const Contact = ({ img, name, message, time, inbox, unread }) => {
  return (
    <div className="overflow-hidden cursor-pointer">
      <div className="flex justify-between py-2 bg-[#051a1d] px-3 border-b border-gray-400 hover:bg-[#2a454a] transition duration-0">
        <div className="flex items-center pb-2">
          <div className="flex w-12 h-12 overflow-hidden rounded-full">
            <img src={img} alt="" className="object-cover w-full rounded-full hover:scale-110 duration-100 ease-out" />
          </div>

          <div className="pl-3">
            <p className="font-semibold text-[18px] text-white">{name}</p>
            <div className="">
              {/* <p className="">{unread}</p> */}
              <p className="text-gray-400 w-[20rem] md:w-[10rem] lg:w-[20rem] truncate">{message}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full text-gray-400">
          <p>{time}</p>
          <div className="rounded-full bg-[#25D366] text-center text-black mt-3">{inbox}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
