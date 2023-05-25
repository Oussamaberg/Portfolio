import { easeOut, motion } from "framer-motion";
import EducationCard from "./EducationCard";
function VerticalSlide() {
  return (
    <div className="flex  justify-center">
      <div className="  flex flex-col justify-cente items-center  mt-[380px] sm:mt-[260px]  md:mt-[150px] 2xl:mt-[40px]">
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
            <div className="absolute  inset-0 -left-7 h-4 w-4 rounded-full bg-green-400"></div>
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
            <div className="absolute  inset-0 -left-7 h-4 w-4 rounded-full bg-green-400"></div>
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
            <div className="absolute  inset-0 -left-7 h-4 w-4 rounded-full bg-green-400"></div>
            <EducationCard
              date={"2008-2012"}
              tittle={"Bachelor Degree"}
              description={"Electrical, Electronics and Communications form FSTG"}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
export default VerticalSlide;
