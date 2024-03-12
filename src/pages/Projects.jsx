import React from "react";
import { ProjectsData } from "../dataBase/ProjectsData";

const Projects = () => {
  return (
    <div className="w-full py-6 px-10 md:px-20 flex flex-col items-center">
      <div className="grid grid-cols-1 sm:max-w-[600px] lg:max-w-[100%] lg:grid-cols-3 gap-4">
        {ProjectsData.map((item) => (
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
      </div>
    </div>
  );
};

export default Projects;
