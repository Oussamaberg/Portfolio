import { motion } from "framer-motion";
function SideMenu({ toggle }: { toggle: any }) {
  document.body.style.overflow = "hidden";

  const scrollToSection = (anchor:string) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const enableScroll = (anchor: string) => {
    document.body.style.overflow = "visible";
    toggle();
    setTimeout(() => scrollToSection(anchor), 500)
  };

  return (
    <motion.div
      initial={{ x: 600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        type: "tween",
        ease: "easeIn",
        delayChildren: 0.3,
      }}
      exit={{
        x: 600,
        opacity: 0,
      }}
      className=" absolute  z-50 w-screen h-screen md:w-[500px] right-0 backdrop-blur-md bg-green-800/50 flex flex-col justify-center items-center"
    >
      <div
        onClick={() => enableScroll("")}
        className="absolute top-0 right-0 p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          type: "tween",
          ease: "easeIn",
        }}
        className="flex gap-4 sm:hidden"
      >
        <motion.span
          initial={{ y: 20 }}
          animate={{ y: [20, 0, 20, 0] }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeIn",
            delay: 0.1,
          }}
          className="hover:bg-blue-500 p-1 rounded-xl hover:shadow-lg hover:text-darkgray font-bold hover:shadow-blue-500/50 transition duration-700  cursor-pointer"
        >
          Linkdin
        </motion.span>
        <motion.span
          initial={{ y: 20 }}
          animate={{ y: [20, 0, 20, 0] }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeIn",
            delay: 0.2,
          }}
          className="hover:bg-blue-400 p-1 rounded-xl hover:shadow-lg hover:text-darkgray font-bold hover:shadow-blue-300/50 transition duration-700  cursor-pointer"
        >
          Twitter
        </motion.span>
        <motion.span
          initial={{ y: 20 }}
          animate={{ y: [20, 0, 20, 0] }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeIn",
            delay: 0.3,
          }}
          className="hover:bg-slate-300 p-1 rounded-xl hover:shadow-lg hover:text-darkgray font-bold hover:shadow-slate-300/50 transition duration-700  cursor-pointer"
        >
          Github
        </motion.span>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          type: "tween",
          ease: "easeIn",
        }}
        className=" flex flex-col items-center gap-2 pt-20 text-4xl text-slate-300"
      >
        <motion.li
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeIn",
          }}
          className="hover:text-darkgray hover:scale-90   transition duration-500"
        >
          <a onClick={() => enableScroll("about")} href="#about">About</a>
        </motion.li>
        <motion.li
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeIn",
            delay: 0.4,
          }}
          className="hover:text-darkgray hover:scale-90 transition duration-500"
        >
          <a onClick={() => enableScroll("education")} href="#education" >Education</a>
        </motion.li>
        <motion.li
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeIn",
            delay: 0.1,
          }}
          className="hover:text-darkgray hover:scale-90 transition duration-500"
        >
          <a onClick={() => enableScroll("specialization")} href="#specialization">Specialization</a>
        </motion.li>
        <motion.li
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeIn",
            delay: 0.2,
          }}
          className="hover:text-darkgray hover:scale-90 transition duration-500"
        >
          <a onClick={() => enableScroll("tech")} href="#tech">Tech Stack</a>
        </motion.li>
        <motion.li
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeIn",
            delay: 0.3,
          }}
          className="hover:text-darkgray hover:scale-90 transition duration-500"
        >
          <a onClick={() => enableScroll("projects")} href="#projects">
            Projects
          </a>
        </motion.li>
        <motion.li
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeIn",
            delay: 0.4,
          }}
          className="hover:text-darkgray hover:scale-90 transition duration-500"
        >
          <a onClick={() => enableScroll("testimonials")} href="#testimonials" >Testimonials</a>
        </motion.li>
        <motion.li
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeIn",
            delay: 0.4,
          }}
          className="hover:text-darkgray hover:scale-90 transition duration-500"
        >
          <a onClick={() => enableScroll("contact")} href="#contact" >Contact</a>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
export default SideMenu;
