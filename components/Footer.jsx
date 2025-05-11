import { assets } from "@/assets/assets"
import Image from "next/image"

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="mt-20 bg-gray-800 text-white">
      <div className="text-center py-8">
        <Image
          src={assets.sunil_logo}
          alt="sunil logo"
          className="w-36 mx-auto mb-4 transition-transform transform hover:scale-110"
        />
        <div className="w-max flex items-center gap-2 mx-auto text-gray-300">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail logo"
            className="w-6"
          />
          <span className="hover:text-white transition-colors">
            sunilneupane957@gmail.com
          </span>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-600 mx-[10%] mt-12 py-6">
        <p className="text-gray-400">© 2025 Sunil Neupane.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/SunilNeupane77"
              className="hover:text-white transition-colors"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sunilneupane77"
              className="hover:text-white transition-colors"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://x.com/sunilneupane778"
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer