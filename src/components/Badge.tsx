import { motion } from "framer-motion";
function Badge({children}:any){
return <>
    <motion.div 
    initial={{x:-1000, rotate:-180}}
    animate={{x:0, rotate:0}}
    transition={{
        duration:0.5
  

    }}
    className="bg-green-600   rotate-6 rounded-2xl  h-28 w-20 flex flex-col justify-center items-center shadow-xl shadow-green-600/50 transition duration-700  cursor-pointer">
    {children}
    </motion.div>
</>
}
export default Badge;