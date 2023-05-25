import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimationControls } from "framer-motion";

interface TestimonialsCardType {
  name: string;
  img: string;
  position: string;
  company: string;
  project: string;
  index: number;
  text: string;
  move: string;
}
function TestimonialsCard({
  name,
  img,
  position,
  company,
  project,
  index,
  text,
  move,
}: TestimonialsCardType) {
  const controlsText = useAnimationControls();
  const controlsImg = useAnimationControls();
  console.log(move);
  useEffect(() => {
    controlsText.start({
      x: move == "right" ? [-20, 0] : [20, 0],
      opacity: [0, 1],
    });
    controlsImg.start({
      opacity: [0, 1],
      y: [20, 0],
      x: move == "right" ? [-10, 0] : [10, 0],
    });
  }, [index]);
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
      }}
      viewport={{ once: true }}
      className=" p-5  -left-[200px] flex flex-col top-10 w-[400px] md:w-[500px] h-[230px] border-green-400 border-[1px] rounded-3xl"
    >
      <motion.div
        animate={controlsImg}
        transition={{
          duration: 0.5,
          type: "tween",
          ease: "easeIn",
        }}
        className="flex  gap-4 items-center"
      >
        <span className="rounded-full">
          <img className="rounded-full" width={60} src={img} />
        </span>
        <div className="flex flex-col">
          <span className="text-sm">{name}</span>
          <div className="text-xs">
            <span className=" text-slate-500">{position}</span>{" "}
            <span className="text-green-400">{company}</span>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={controlsText}
          transition={{
            duration: 0.5,
            type: "tween",
            ease: "easeIn",
          }}
          className="py-2 font-serif"
        >
          "{text}"
        </motion.div>
      </AnimatePresence>

      <div className="text-xs text-slate-500">
        <a href={project}>Project</a>
      </div>
    </motion.div>
  );
}
export default TestimonialsCard;
