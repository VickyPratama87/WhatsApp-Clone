import React from "react";

const Message = ({ name, message, css1, css2, timestamp, read }) => {
  return (
    <div className={`${css2} flex`}>
      <div className={`${css1} flex flex-col pr-16 pl-2 m-2 lg:mx-6 p-2 rounded-[.4rem]`}>
        <div className="flex flex-col">
          {/* {name && <p className="pr-3 font-bold">{name}</p>} */}
          <p className="text-[14px] ml-1">{message}</p>
        </div>

        <div className="flex justify-end -mr-14 -mb-1">
          <p className="text-[12px] text-gray-300 text-end">{timestamp}</p>
          <p className="ml-2">{read}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
