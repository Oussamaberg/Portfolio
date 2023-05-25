import { motion } from "framer-motion";
function SpecialisationCard({
  tittle,
  description,
  projectNumber,
  children,
}: {
  tittle: string;
  description: string;
  projectNumber: number;
  children: any;
}) {
  return (
    <motion.div
      initial={{ rotateY: 45 }}
      whileInView={{ rotateY: 0 }}
      transition={{
        duration: 1,
        type: "tween",
        ease: "easeIn",
      }}
      viewport={{ once: true }}
      className="p-3"
    >
      <div className=" relative h-40  w-[400px] sm:w-[500px] md:w-[700px] group m-1">
        
        <div className="relative flex flex-col py-10 px-5 gap-1 bg-darkgray   group-hover:rotate-1 rotat border-2 rounded-xl border-green-400 ransition   duration-700 ">
          <span className="absolute top-3  right-3  text-green-400 group-hover:scale-75 group-hover:text-green-800 ransition   duration-700 ">
            {children}
          </span>
          <span className="text-3xl group-hover:text-white ransition   duration-700 "> {tittle} </span>
          <span className="text-xs text-slate-400 pb-2 ">
            {description}
          </span>
          <span className="text-xs">{projectNumber} Projects</span>
        </div>
      </div>
    </motion.div>
  );
}
export default SpecialisationCard;
