import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimationControls } from "framer-motion"; 
function TestimonialsCard({name, img, position, company, project,index, text, move}) {
    const controlsText = useAnimationControls();
    const controlsImg = useAnimationControls()
    console.log(move)
    useEffect(() => {
        controlsText.start({ x:(move == "right")?[-20,0]:[20,0], opacity: [0,1] })
        controlsImg.start({opacity: [0,1],y:[20,0],x:[-10,0] })
      }, [index])
  return (
    <motion.div 
    initial={{y:50, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{
        duration:0.8,
    }}
    className=" p-5 absolute -left-[270px] flex flex-col top-10 w-[500px] h-[200px] border-green-400 border-[1px] rounded-3xl">
      <motion.div
      animate={controlsImg}
      transition={{
          duration:0.7,
          type:"tween"
      }}
         className="flex  gap-4 items-center">
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
       initial={{opacity:0}}
       animate={controlsText}
       transition={{
           duration:0.7,
           type:"tween"
       }}
      className="py-2 font-serif">
        "{text}"
      </motion.div>
      </AnimatePresence>
      
      <div className="text-xs text-slate-500"><a href={project}>Project</a></div>
    </motion.div>
  );
}
export default TestimonialsCard;
