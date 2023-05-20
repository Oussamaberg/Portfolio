import { easeOut, motion } from "framer-motion";
import EducationCard from "./EducationCard";
function VerticalSlide() {
  return (
    <div className="flex  justify-center">
      <div className="   relative mt-[500px] sm:mt-[450px] md:mt-[300px]">
        <div className="absolute w-96 xl:w-[800px] -top-20 sm:-top-32 md:-top-20 lg:-top-40  xl:-top-30  -left-40 text-3xl xl:text-6xl green-grad ">
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
          className="absolute -left-40 border-l-2 pl-5 border-slate-400 h-[500px] w-96"
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
              date={"01/03/2023"}
              tittle={"Software engineer"}
              description={"Software engineer degree from alx africa"}
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
              date={"01/03/2023"}
              tittle={"Software engineer"}
              description={"Software engineer degree from alx africa"}
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
              date={"01/03/2023"}
              tittle={"Software engineer"}
              description={"Software engineer degree from alx africa"}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
export default VerticalSlide;
