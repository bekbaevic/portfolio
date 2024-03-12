import Atropos from "atropos/react";
import React from "react";
import bannerImage from "../images/Banner.png";
const Banner = () => {
  return (
    <div className="w-full">
      <div className="relative w-full flex flex-col items-center justify-center py-20 sm:py-[120px] text-white h-[calc(100vh-60px)] bg-[#00000060]">
        <img
          src={bannerImage}
          className="absolute top-0 left-0 h-full w-full object-cover object-center z-[-1]"
        />
        <div className="text-center">
          <h1 className="text-[32px] sm:text-[60px] font-serif uppercase font-bold px-5">
            Islam Bekbaevich
          </h1>
          <p className="font-[500] text-[16px] sm:text-[1.5rem] ">
            Front-end developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <img src={photo} className="w-[400px] rounded-full" /> */
}
