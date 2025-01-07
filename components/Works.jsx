import { assets, workData } from "@/assets/assets";
import Image from "next/image";

const Works = () => {
return (
    <div>
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My Latest Works</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam porro
                consequuntur quasi labore accusantium esse. Reiciendis ratione
                repudiandae tenetur qui?
            </p>

            <div className="grid grid-cols-auto my-10 gap-5 ">
                {workData.map((project, index) => (
                    <div
                        key={index}
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                        className="aspect-square bg-no-repeat bg-center rounded-lg relative cursor-pointer group"
                    >
                        <div className="bg-white w-10/12 rounded-md absolute bottom-2 left-1/2 transform -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-4">
                            <div>
                                <h2 className="font-semibold">{project.title}</h2>
                                <p className="test-sm text-gray-700">{project.description}</p>
                            </div>
                            <div className="border rounded-full px-1 py-1 border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-400 translation
                            ">
                                <Image src={assets.send_icon} alt="send icon" width={24} height={24} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <a className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 " href="">Show More
                    <Image src={assets.right_arrow_bold} alt="ritht arrow bold" className="w-4"/>
                </a>
            </div>
        </div>
    </div>
);
};

export default Works;
