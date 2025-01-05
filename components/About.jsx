"use client"
import { assets, infoList } from "@/assets/assets";
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
            deserunt. Veritatis rem distinctio nam error? Dolorem perferendis
            repudiandae similique aspernatur amet esse magni sit, doloremque,
            rerum accusamus ipsam debitis! Expedita provident sapiente at error
            optio assumenda similique, fugiat cum, adipisci hic, atque unde
            praesentium sed eos?
          </p>
          <ul>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li key={index}>
                <Image src={icon} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
