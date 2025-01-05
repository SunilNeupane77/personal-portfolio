import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 max-w3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4  ">
      <div>
        <Image
          src={assets.sunil_neupane}
          alt="photo of sunil Neupane"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex itams-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hello I'm Sunil Neupane{" "}
        <Image src={assets.hand_icon} alt="handicon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo ">
        Full-Stack Software Developer <br /> Tech Enthusiast
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Emerging software developer Passioante on Tech
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 ">
        <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">
          Contact me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            className="w-4"
          />
        </a>
        <a href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">
          My Resume
          <Image
            src={assets.download_icon}
            alt="download icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
