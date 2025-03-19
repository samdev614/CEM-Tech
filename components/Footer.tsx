import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px]" id="contact">
      {/* background grid */}
      

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-orange">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:creativeaglemedia@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow className="text-orange" />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-10 md:flex-row flex-col justify-between items-center">
        <p className=" md:text-base text-sm md:font-normal font-light italic">
          Copyright © 2025 CEM Technologies           
        </p>
        <p className="italic sm: text-sm lg: text-normal">Contact Us- Creative Eagle Media: +254790 220 453</p>
      

        <div className="flex items-center md:gap-3 gap-6 text-red-700">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
