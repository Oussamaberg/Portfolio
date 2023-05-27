import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import GlowingButton from "./GlowingButton";

function About() {
  let { scrollYProgress } = useScroll();
  let opacity = useTransform(scrollYProgress, [0, 1], [0, 5]);
  let scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  return (
    <div className="relative flex flex-col justify-center items-center">
      <motion.div 
      style={{ opacity: opacity}}
      id="about-section"
      className="  absolute flex -top-16 left-10 2xl:left-1/4 border-2 py-1 px-3 rounded-3xl">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </span>
        <span>About</span>
      </motion.div>
      <motion.div
        style={{ opacity: opacity, scale: scale }}
        className=" flex flex-col items-center"
      >
        <h2 className="text-3xl px-16  lg:text-4xl xl:text-5xl">
          Every great UI begin with an even{" "}
          <span className="green-grad">better story:</span>
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{
          duration: 1,
          type: "tween",
          ease: "easeOut",
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className=" sm:text-3xl px-5 pt-10 md:text-center  xl:w-2/3 font-semibold text-gray-400"
      >
        
          Hello there! My name is Oussama Berghai, and I am from the beautiful
          country of Morocco. I am a proud husband and father of one adorable
          kid, who is the light of my life. I have always had a passion for
          technology and software development, and I am lucky enough to be able
          to do what I love for a living. I love to code and build challenging
          solutions that push me to my limits and help me grow as a developer. I
          have experience working with a variety of programming languages, but
          my favorites is Javascript and my prefered library is ReactJS.
        
      </motion.div>
      <GlowingButton/>
    </div>
  );
}
export default About;
