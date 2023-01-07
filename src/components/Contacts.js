import React from "react";
import profile from "../assets/profile.jpg";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
import profile5 from "../assets/profile5.jpg";
import profile6 from "../assets/profile6.jpg";
import profile7 from "../assets/profile7.jpg";
import Contact from "./Contact";
import { BsCheck2All } from "react-icons/bs";

const Contacts = () => {
  const contacts = [
    {
      img: profile,
      name: "Amadora Qalesya",
      message: "No but i will join.",
      time: "19.22",
      unread: <BsCheck2All className="text-gray-300" />,
    },
    {
      img: profile1,
      name: "Carlina Sofea",
      message: "What's up donec mauris.",
      time: "19.00",
      inbox: "2",
    },
    {
      img: profile2,
      name: "Tevy Pratista",
      message: "How are you donec mauris.",
      time: "20.22",
      inbox: "4",
    },
    {
      img: profile3,
      name: "Zena Swastika",
      message: "Hi donec mauris.",
      time: "20.22",
      inbox: "1",
    },
    {
      img: profile4,
      name: "Felicity Zelene",
      message: "Good Morning, donec mauris.",
      time: "kemarin",
      unread: <BsCheck2All className="text-gray-300" />,
    },
    {
      img: profile5,
      name: "Poppy Nevaeh",
      message: "Lorem ipsum dolor Lorem ipsum dolor sit amet tincidunt senectus elit gravida dictum odio faucibus donec mauris Lorem ipsum dolor sit.",
      time: "10.22",
      inbox: "5",
    },
    {
      img: profile6,
      name: "Raissa Sunniva",
      message: "What's up donec mauris.",
      time: "00.00",
      inbox: "1",
    },
    {
      img: profile7,
      name: "Qiana Eldora",
      message: "How are you donec mauris.",
      time: "kemarin",
      unread: <BsCheck2All className="text-gray-300" />,
    },
  ];

  return (
    <div>
      <div className="md:w-[20rem] lg:w-[30rem] md:px-2">
        {contacts.map((contact) => (
          <Contact img={contact.img} name={contact.name} message={contact.message} time={contact.time} inbox={contact.inbox} unread={contact.unread} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
