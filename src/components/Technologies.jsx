// import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
// import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import react from "../assets/react.png";
import java from "../assets/java.png";
import node from "../assets/nodejs.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import mongoDB from "../assets/mongo-db.png";
import tailwind from '../assets/tailwind.png'
import cPlus from '../assets/s.png'
import js from '../assets/javascript.png'
import vsCode from '../assets/vsCode.png'
import nest from '../assets/nestjs.png'
// import leetcode from '../assets/leetcode.png'

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technoloiges
      </motion.h1>
       <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 p-3"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-20" src={react} alt="react" />
          {/* <RiReactjsLine className="text-7xl text-cyan-400" /> */}
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-20" src={java} alt="java" />
          {/* <TbBrandNextjs className="text-7xl" /> */}
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-20" src={node} alt="node" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-20" src={html} alt="html" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-20" src={mongoDB} alt="mongoDB" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-20" src={tailwind} alt="css" />
          {/* <BiLogoPostgresql className="text-7xl text-sky-700" /> */}
        </motion.div>
        
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-20" src={cPlus} alt="c++" />
          {/* <BiLogoPostgresql className="text-7xl text-sky-700" /> */}
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-20" src={js} alt="javaScript" />
          {/* <BiLogoPostgresql className="text-7xl text-sky-700" /> */}
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-20" src={vsCode} alt="vsCode" />
          {/* <BiLogoPostgresql className="text-7xl text-sky-700" /> */}
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-20" src={nest} alt="nestJs" />
          {/* <BiLogoPostgresql className="text-7xl text-sky-700" /> */}
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-20" src={css} alt="css" />
          {/* <BiLogoPostgresql className="text-7xl text-sky-700" /> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
