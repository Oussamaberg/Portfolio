import { motion } from "framer-motion";
import Badge from "./Badge";

motion;
function Hero() {
  return (
    <>
      <div className="flex relative  justify-center items-end mt-80 px-5">
        <div className="absolute left-14 sm:left-auto -top-64 bg-green-300 blur-md rounded-full h-64 w-64"></div>
        <div className="  absolute z-50 left-14 sm:left-auto -top-64 bg-cover rounded-full bg-profile-bg w-64 h-64 ">
          {" "}
        </div>
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, -100, 100, 200, 100, 0],
            y: [0, -100, -200, -300, -200, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute top-20 left-1/3 bg-emerald-300   blur-3xl rounded-full w-40 h-40"
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
          className="absolute top-20 left-1/3 bg-red-300   blur-3xl rounded-full w-40 h-40"
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
          className="absolute top-20 left-1/3 bg-yellow-300   blur-3xl rounded-full w-40 h-40"
        ></motion.div>
        <div className="text-5xl mt-20 md:text-7xl sm:mt-20">
          <h1 className=" ">
            {" "}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className=" bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 h-max "
            >
              Say Hi from Oussama,
            </motion.div>{" "}
          </h1>
          <div className="absolute text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            <span>Front-End Developer.</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
          className="absolute w-full top-48 px-16 sm:top-30 md:top-56 lg:w-auto  text-slate-400 sm:px-32 md:px-40"
        >
          I am deeply passionate about coding and take immense pleasure in
          creating elegant and visually captivating solutions.
        </motion.div>
        <div className="absolute flex gap-4 top-72 font-thin">
          <Badge>
            <div className="text-3xl">+4</div>
            <div className=" text-xs px-4   ">Yers of experience</div>
          </Badge>
          <Badge>
            <div className="text-3xl">+1</div>
            <div className=" text-xs px-4   ">Project</div>
          </Badge>
        </div>
      </div>
    </>
  );
}
export default Hero;
