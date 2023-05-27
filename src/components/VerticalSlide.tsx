import { easeOut, motion } from "framer-motion";
import EducationCard from "./EducationCard";
function VerticalSlide() {
  return (
    <div className="relative flex  justify-center mt-[240px] sm:mt-[340px]  md:mt-[250px] 2xl:mt-[140px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        id="education-section"
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
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
        </span>
        <span>Education</span>
      </motion.div>
      <div className="  flex flex-col justify-cente items-center">
        <div className=" w-96 xl:w-[800px]  text-3xl xl:text-6xl green-grad pb-20 text-center">
          Education and Experience
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.8,
            type: "tween",
            ease: easeOut,
            delayChildren: 0.5,
            staggerChildren: 1.5,
          }}
          viewport={{ once: true }}
          className="  border-l-2 pl-5 border-slate-400 h-[500px] "
        >
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delayChildren: 0.5,
            }}
            viewport={{ once: true }}
            className=" relative px-4 py-2 h-32 w-60  bg-black mt-0 p-10 rounded-xl"
          >
            <div className="absolute  inset-0 -left-[29px] h-4 w-4 rounded-full bg-darkgray flex justify-center items-center">
            <div className=" h-2 w-2 rounded-full bg-green-400"></div>
            </div>
            <EducationCard
              date={"2023-Present"}
              tittle={"Engineer's degree"}
              description={"Computer Software Engineering from ALX Africa"}
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delayChildren: 0.5,
            }}
            viewport={{ once: true }}
            className=" relative px-4 py-2  h-32 w-60  bg-black mt-10 p-10 rounded-xl"
          >
            <div className="absolute  inset-0 -left-[29px] h-4 w-4 rounded-full bg-darkgray flex justify-center items-center">
            <div className=" h-2 w-2 rounded-full bg-green-400"></div>
            </div>
            <EducationCard
              date={"2012-2014"}
              tittle={"Master's degree"}
              description={"Air traffic safety electronics from AIMAC"}
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delayChildren: 0.5,
            }}
            viewport={{ once: true }}
            className=" relative  px-4 py-2 h-32 w-60  bg-black mt-10 p-10 rounded-xl"
          >
            <div className="absolute  inset-0 -left-[29px] h-4 w-4 rounded-full bg-darkgray flex justify-center items-center">
            <div className=" h-2 w-2 rounded-full bg-green-400"></div>
            </div>
            <EducationCard
              date={"2008-2012"}
              tittle={"Bachelor Degree"}
              description={
                "Electrical, Electronics and Communications form FSTG"
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
export default VerticalSlide;
