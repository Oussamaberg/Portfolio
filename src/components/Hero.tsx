import { motion } from "framer-motion";
import Badge from "./Badge";
import { useScroll, useTransform } from "framer-motion";

motion;
function Hero() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const date = new Date()
  return (
    <>
      <div className="flex relative  justify-center items-center mt-80 px-5">
        <motion.div style={{y}} className="absolute z-0 left-5 sm:left-auto -top-64 bg-green-300 blur-xs rounded-full h-64 w-64"></motion.div>
        <motion.div style={{y}}  className="  absolute z-0 left-5 sm:left-auto -top-64 bg-cover rounded-full bg-profile-bg w-64 h-64 ">
          {" "}
        </motion.div>
        <motion.div
          
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, -100,0, 100, 200, 100, 0],
            y: [0, -100, -200, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute top-20 left-1/3 bg-emerald-300   blur-3xl  opacity-50  rounded-full w-40 h-40"
        ></motion.div>
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 100, 0, -100, -200, -300, -200, -100, 0],
            y: [0, -100, -200, -300, -200, -100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute top-20 left-1/3 bg-red-300   blur-3xl opacity-50 rounded-full w-40 h-40"
        ></motion.div>
        <motion.div
          initial={{ x: 100, y: -100 }}
          animate={{
            x: [0, -50, 0, 50, 100, 150, 100, 50, 0],
            y: [-100, -200, -300, -200, -100],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-20 left-1/3 bg-yellow-300   blur-3xl  opacity-50  rounded-full w-40 h-40"
        ></motion.div>
        <div className="text-3xl mt-20 z-10 md:text-6xl sm:mt-20 flex justify-center items-center flex-col text-center">
          <h1 className=" ">
            {" "}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="green-grad  "
            >
              OUSSAMA BERGHAI
            </motion.div>{" "}
          </h1>
          <div className=" text-2xl md:text-4xl green-grad ">
            <span>React Developer | Front-End Developer | UI/UX Enthusiast</span>
          </div>
          <motion.div
        
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1}}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
        className="text-slate-400 text-xs sm:text-lg py-6"
      >
        I am deeply passionate about coding and take immense pleasure in
        creating elegant and visually captivating solutions.
      </motion.div>
        </div>
      
        <div className="absolute flex gap-4 top-72 md:top-80 text-darkgray">
          <Badge>
            <div className="text-3xl">+{date.getFullYear() - 2022}</div>
            <div className=" text-xs px-4   ">Years of experience</div>
          </Badge>
          <Badge>
            <div className="text-3xl">+4</div>
            <div className=" text-xs px-4   ">Project</div>
          </Badge>
        </div>
      </div>
    </>
  );
}
export default Hero;
