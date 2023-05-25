import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectCardLg from "./ProjectCardLg";

function Projects() {
  return (
    <div className="relative flex flex-col justify-center  items-center  mt-[150px]  md:mt-70 p-2 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        id="projects-section"
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
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
        </span>
        <span>Projects</span>
      </motion.div>
      <div className="  green-grad text-4xl md:text-6xl  pb-20">Projects</div>
      <div className="gap-4 grid grid-cols-2">
        <div className="col-span-2 ">
          <ProjectCardLg
            techArray={["reactJS", "TailwindCss"]}
            bg={"bg-project-2"}
            url={"https://enigm-puzzle.netlify.app"}
            github={"https://github.com/Oussamaberg/Enigma"}
            text={"Game developpement - Enigma Math puzzle Game"}
          />
        </div>

        <ProjectCard
          techArray={["reactJS", "TailwindCss"]}
          bg={"bg-project-1"}
          url={"https://enigm-puzzle.netlify.app"}
          github={"https://github.com/Oussamaberg/Enigma"}
          position="left"
          text={"This Portfolio Web-site"}
        />
        <ProjectCard
          techArray={["reactJS", "TailwindCss"]}
          bg={"bg-project-3"}
          url={"https://enigm-puzzle.netlify.app"}
          github={"https://github.com/Oussamaberg/Enigma"}
          position="right"
          text={"Portfolio Web-Site Coursera"}
        />
      </div>
    </div>
  );
}
export default Projects;
