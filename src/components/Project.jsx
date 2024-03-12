import React from "react";
import { ProjectsData } from "../dataBase/ProjectsData";
import { NavLink, useLocation } from "react-router-dom";
const Project = () => {
  return (
    <div className="w-full py-6 px-10 md:px-20 flex flex-col items-center">
      <h1 className="w-full text-left mb-6 text-[#05409a] font-[700] ">
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 sm:max-w-[600px] lg:max-w-[100%] lg:grid-cols-3 gap-4">
        {ProjectsData.slice(0, 5).map((item) => (
          <a
            key={item.id}
            className="relative border rounded-sm shadow-md"
            target="blank"
            href={item.url}
          >
            <h3 className="font-[700] bg-[#00000050] w-full h-full top-1 left-1 hover:bg-[#00000099] opacity-0 hover:opacity-100 flex items-center justify-center text-white absolute px-2 py-1 rounded-sm right-0 text-[22px]">
              {item.title}
            </h3>
            <img src={item.image} className="rounded-sm" />
          </a>
        ))}
        <NavLink
          to="projects"
          className="relative bg-[#05409a] h-full flex justify-center items-center rounded-sm text-[22px] font-[700] min-h-[60px] text-[#fff] py-2"
        >
          <span className="w-full h-full flex justify-center items-center absolute top-0 left-0 hover:bg-[#00000040]">
            All projects
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Project;
