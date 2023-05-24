import { motion } from "framer-motion";
function ProjectCardLg({
  techArray,
  bg,
  url,
  github,
  text
}: {
  techArray: Array<string>;
  bg: string;
  url: string;
  github: string;
  text:string
}) {
  const Class = `relative h-[200px]   md:h-[350px] ${bg} bg-cover bg-center rounded-3xl p-5`;
  return (
    <div>
    <motion.div 
    initial={{y:50, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{duration:1}}
    viewport={{ once: true }}
    className={Class}>
      <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-green-400/50 rounded-3xl    backdrop-blur-md flex items-center justify-center gap-4 transition duration-700">
        <a href={url}>
        <div className="w-8 h-8 rounded-full  bg-darkgray flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </div>
        </a>
        <a href={github}>
        <div className="w-8 h-8 rounded-full bg-darkgray flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            />
          </svg>
        </div>
        </a>
        
      </div>
      <div className="flex gap-1">
        {techArray.map((item, index) => (
          <span
            key={index}
            className="   bg-slate-300 text-slate-800 text-xs rounded-full px-2 py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
    <div className="text-xs md:text-lg font-serif p-2">{text}</div>
    </div>
  );
}
export default ProjectCardLg;
