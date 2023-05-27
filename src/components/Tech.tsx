import supaman from "../assets/img/supaman.png";
import PythonIcon from "./PythonIcon";
import ReactIcon from "./ReactIcon";
import TailwindIcon from "./TailwindIcon";
import MongoIcon from "./MongoIcon";
import { motion } from "framer-motion";
import TypescriptIcon from "./TypescriptIcon";
import { useScroll, useTransform } from "framer-motion";

function Tech() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], [0, 700]);
  return (
    <div className="relative flex flex-col justify-center items-center  mt-[360px]  md:mt-70 p-2">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        id="tech-section"
        className="  absolute flex -top-16 left-10 2xl:left-1/4 border-2 py-1 px-3 rounded-3xl"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        </span>
        <span>Technologies</span>
      </motion.div>
      <div className="  green-grad text-4xl md:text-6xl pb-52">
        Technology Stack
      </div>
      <div className="relative  ">
        <motion.div
          whileInView={{
            opacity: [0.75, 1, 0.75],
            scale: [1, 1.1, 1],
            y: [0, 10, 0],
            x: [0, 10, 0],
            rotate: [5, 0, -5, 0, 5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
          className="absolute -left-52  sm:-left-60 top-20"
        >
          <PythonIcon size={100} />
        </motion.div>
        <motion.div
          whileInView={{
            opacity: [0.75, 1, 0.75],
            scale: [1, 1.1, 1],
            y: [0, 10, 0],
            x: [0, 10, 0],
            rotate: [5, 0, -5, 0, 5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
          className="absolute -left-48 -top-10 w-10 h-10"
        >
          <TypescriptIcon />
        </motion.div>
        <motion.div
          whileInView={{
            opacity: [0.75, 1, 0.75],
            scale: [0.9, 1, 1.1, 1, 0.9],
            y: [0, 10, 0],
            rotate: [5, 0, -5, 0, 5, 180],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.7,
          }}
          className="absolute -left-16 -top-40"
        >
          <ReactIcon size={100} />
        </motion.div>
        <motion.div
          whileInView={{
            opacity: [0.75, 1, 0.75],
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 10, 0],
            rotate: [5, 0, -5, 0, 5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 0.9,
          }}
          className="absolute -right-[220px] sm:-right-[280px]"
        >
          <TailwindIcon size={100} />
        </motion.div>

        <motion.div
          whileInView={{
            opacity: [0.75, 1, 0.75],
            scale: [0.5, 0.8, 0.5],
            x: [0, -20, 0],
            y: [0, 10, 0],
            rotate: [5, 0, -5, 0, 5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.9,
          }}
          className="absolute -top-20 -right-[220px]"
        >
          <MongoIcon size={64}/>
        </motion.div>

        <motion.div
          style={{ y }}
          animate={{
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute w-60 h-60 -top-[500px] -left-32  "
        >
          <img src={supaman} />
        </motion.div>
      </div>
    </div>
  );
}
export default Tech;
