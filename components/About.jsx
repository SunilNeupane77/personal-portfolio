"use client";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.sunil_neupane}
            alt="user image"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            consectetur consequuntur a, ad eligendi voluptatibus, aspernatur
            nulla, nesciunt reprehenderit tempore accusantium ea labore
           
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={icon} alt={title} className="w-7 h-7 mt-3 object-contain"/>
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-800 font-Ovo">Tools I Use</h4>
          <ul className="flex flex-wrap items-center gap-4 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li key={index} className="flex items-center justify-center w-16 h-16 sm:w-15 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500 ">
                <Image src={tool} alt="tools image" className="w-full h-full object-contain"/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
