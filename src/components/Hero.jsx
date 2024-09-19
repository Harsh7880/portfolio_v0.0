import { HERO_CONTENT } from "../utils/constants";
import { motion } from "framer-motion";
import harsh from "../assets/harsh5.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/x.png";
import email from "../assets/gmail.png";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start ml-20">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-2 text-6xl font-bold text-white/90 tracking-tight lg:mt-16 lg:text-7xl"
            >
              Hello, I am Harsh Kumar
            </motion.h1>

            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 font-medium text-2xl"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-6"
            >
              <a
                href="https://www.linkedin.com/in/harshkumar7880/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-9 hover:scale-110 transition-all duration-200" src={linkedin} alt="linkdin" />
              </a>
              <a
                href="https://github.com/Harsh7880"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-9 hover:scale-110 transition-all duration-200" src={github} alt="github" />
              </a>
              <a
                href="https://www.instagram.com/harsh_7880/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-9 hover:scale-110 transition-all duration-200" src={instagram} alt="instagram" />
              </a>
              <a
                href="https://x.com/harshk8478"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-9 hover:scale-110 transition-all duration-200 rotate-6" src={twitter} alt="twitter" />
              </a>
              <a
                href="vijayk8478@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-11 hover:scale-110 transition-all duration-200" src={email} alt="email" />
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={harsh}
              alt="Harsh Kumar"
              className="-mt-20 w-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
