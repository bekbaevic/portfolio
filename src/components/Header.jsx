import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { HeaderItems } from "../dataBase/HeaderItems";

const Header = () => {
  return (
    <div className="w-[100%] flex flex-col gap-2 sm:flex-row items-center justify-between border-b border-gray-500 px-[5%] sticky top-0 bg-white shadow-lg">
      <NavLink to={"/"}>
        <h1 className="text-[18px] font-[700] h-[60px] flex items-center">
          BEKBAEVICH
        </h1>
      </NavLink>
      <ul className="hidden sm:flex h-[60px]">
        {HeaderItems.map((item) => (
          <NavLink
          key={item.title}
            className="header-menu-item h-full px-3 rounded-t-[6px] sm:rounded-none flex justify-center items-center"
            to={item.link}
          >
            {item.title}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Header;
