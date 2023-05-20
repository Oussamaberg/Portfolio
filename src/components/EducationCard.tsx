import { motion } from "framer-motion"
function EducationCard({date, tittle, description}:{date:string, tittle:string, description:string}){
    return  <motion.div
    className=" flex flex-col"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <span className=" text-green-400 text-xs">
      {date}
    </span>
    <span className="text-lg font-bold">{tittle}</span>
    <span className="text-slate-400">
      {description}
    </span>
  </motion.div>

}
export default EducationCard