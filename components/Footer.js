import config from "@/config/config.json";
import social from "@/config/social.json";
import Link from "next/link";
import Social from "./Social";
import Logo from "./Logo";
import LogoLarge from "./LogoLarge";
import ContactItem from "./ContactItem";
import {
  IoCall,
  IoLogoVimeo,
  IoLogoYoutube,
  IoMail,
  IoMusicalNotesSharp,
} from "react-icons/io5";
import { FaSpotify } from "react-icons/fa";

const Footer = () => {
  const { copyright } = config.params;
  return (
    <footer className="pt-16 pb-9 bg-darkgray" id="footer">
      <div className="container grid w-full grid-cols-1 pl-8 pr-8 mb-6 ml-auto mr-auto text-center sm:grid-cols-4">
        <div className="mb-8 sm:mb-2">
          {" "}
          <LogoLarge />
        </div>
        <div className="mb-8 sm:mb-2">
          <p className="text-2xl text-white  text-start">
            Contact Us
          </p>
          <ContactItem Icon={IoCall} text={"+94 77 309 7837"} />
          <ContactItem Icon={IoMail} text={"taximusic.info@gmail.com"} />
        </div>
        <div className="flex-row items-start justify-start mb-8 sm:mb-2">
          <p className="text-2xl text-white  text-start">
            Follow Us
          </p>
          <Social source={social} className="flex w-full mt-4 " />
        </div>
        <div className="mb-8 sm:mb-2">
          <p className="text-2xl text-white  text-start">
            Our Music
          </p>
          <div className="flex mt-4 gap-x-4">
            <FaSpotify className="w-6 h-6 transition-all duration-75 delay-75 cursor-pointer text-footericoncolor hover:text-appyellow" />
            <IoMusicalNotesSharp className="w-6 h-6 transition-all duration-75 delay-75 cursor-pointer text-footericoncolor hover:text-appyellow" />
            <IoLogoYoutube className="w-6 h-6 transition-all duration-75 delay-75 cursor-pointer text-footericoncolor hover:text-appyellow" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-base text-center text-footericoncolor">
          Taxi Entertainment &copy; 2023 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
