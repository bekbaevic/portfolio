import React from "react";
import { AboutMeData } from "../dataBase/AboutMe";
const AboutContent = () => {
  return (
    <div className="w-full pt-6 pb-20 px-10 md:px-20 flex flex-col items-center bg-[#05409a]">
      <h1 className="text-left w-full mb-6 text-[#fff] font-[700] ">ABOUT ME</h1>
      <div className="grid grid-cols-1 sm:max-w-[600px] lg:max-w-[100%] lg:grid-cols-3 gap-4">
        {AboutMeData.map((item) => (
          <div
            key={item.id}
            className="p-4 text-[#fff] border flex flex-col items-center rounded-sm border-[#fff]"
          >
            <h1 className="font-[700] text-[22px] border-b pb-2 w-full flex items-center justify-center gap-2 text-center border-[#fff]">
              {item.icon}
              {item.title}
            </h1>
            <p className="py-4">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutContent;
