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
      <div className=" relative h-40  w-[400px] sm:w-[500px] md:w-[700px] border-green-400 border-[1px] bg-gradient-to-r from-emerald-200 to-indigo-100 rounded-2xl group">
        <div className=" absolute   bg-darkgray inset-0 rounded-2xl group-hover:scale-0 group-hover:opacity-0 transition duration-300  ease-linear"></div>
        <div className="relative flex flex-col py-10 px-5 gap-1 group-hover:text-slate-900  shadow-lg">
          <span className="absolute top-3  right-3  text-green-400 group-hover:text-slate-900">
            {children}
          </span>
          <span className="text-3xl"> {tittle} </span>
          <span className="text-xs text-slate-400 pb-2 group-hover:text-slate-600">
            {description}
          </span>
          <span className="text-xs">{projectNumber} Projects</span>
        </div>
      </div>
    </motion.div>
  );
}
export default SpecialisationCard;
