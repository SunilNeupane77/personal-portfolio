import { assets } from "@/assets/assets"
import Image from "next/image"
const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
        <div className="text-center">
            <Image src={assets.sunil_logo} alt="sunil logo" className="w-36 mx-auto mb-2" />
            <div className="w-max flex items-center gap-2 mx-auto">
            <Image src={isDarkMode? assets.mail_icon_dark:assets.mail_icon} alt="maillogologo" className="w-6" />
            sunilneupane957@gmail.com
            </div>
        </div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
            <p>© 2025 Sunil Neupane.</p>
            <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                <li><a target="_blank" href="https://github.com/SunilNeupane77">Github</a></li>
                <li><a target="_blank" href="https://github.com/SunilNeupane77">Linkedin</a></li>
                <li><a target="_blank" href="https://github.com/SunilNeupane77">Twitter</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer