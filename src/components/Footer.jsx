import React from "react";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { Contacts, Links } from "../dataBase/Contacts";

const Footer = () => {
  return (
    <div className="w-full py-4 px-10 md:px-20 flex flex-col bg-[#05409a] text-white">
      <h1 className="text-left w-full mb-6 text-white font-[700]">CONTACT</h1>
      <div className="flex flex-col gap-3">
        <div className="flex  flex-col sm:flex-row items-center gap-4">
          {Contacts.map((item) => (
            <p
              key={item.title}
              href={item.label}
              className="flex items-center sm:justify-center bg-[#ffffff30] w-full gap-2 font-[600] p-4 rounded-sm hover:bg-[#ffffff70] cursor-pointer"
            >
              <span className="text-[#05409a] bg-white p-1 rounded-sm">
                {item.icon}
              </span>{" "}
              {item.title}
            </p>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {Links.map((item) => (
            <a key={item.title} target="blank" href={item.label} className="flex items-center bg-[#ffffff30] w-full sm:justify-center gap-2 font-[600] p-4 rounded-sm hover:bg-[#ffffff60]">
              <span className="text-[#05409a] bg-white p-1 rounded-sm">
                {item.icon}
              </span>{" "}
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
