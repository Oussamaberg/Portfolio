import { motion } from "framer-motion";
import user1 from "../assets/img/user1.jpeg";
import user2 from "../assets/img/user2.jpg";
import user3 from "../assets/img/user3.jpg";
import TestimonialsCard from "./TestimonialsCard";
import { useState } from "react";
function Testimonials() {
    const [index, setIndex] = useState(2)
    const  [moveTo, setMoveTo] = useState("right")
    const arrowLeft = () => {
        if(index == 0){
            setIndex(2);
        }else{
            setIndex((index) => index - 1);
        }
        setMoveTo("left")

    }
    const arrowRight = () => {
        if(index == 2){
            setIndex(0);
        }else{
            setIndex((index) => index + 1);
        }
        setMoveTo("right")

    }
  const data = [
    {
      name: "Paul kidman",
      img: user1,
      position: "CEO of",
      company: "IBM",
      project: "",
      text: "He is very help full and he knows how to deliver breath catching user interface,i loved working with him do much"
    },
    {
        name: "maria garcia",
        img: user2,
        position: "manager at",
        company: "Google",
        project: "",
        text: "Oussama is highly professional and easy to communicate with. He answered all my questions along the way. Will be working with him again I hope!"
      },
      {
        name: "jesus Walker",
        img: user3,
        position: "Full stack dev at",
        company: "Apple",
        project: "",
        text: "I've been working with Oussama on an urgent project. He was quick to respond and had what I needed done within a very short period of time and then some."
      },
  ];

  return (
    <div className="relative flex flex-col justify-center  items-center  mt-[250px]  md:mt-[600px] p-2 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
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
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
        </span>
        <span className="">Testimonials</span>
      </motion.div>
      <div className="  green-grad text-5xl xl:text-6xl pb-20">
        Trusted by Hundred Clients
      </div>
      <div className="relative flex flex-col">
        <div className=" absolute -left-[270px] font-seri text-lg underline decoration-green-400">Testimonials</div>
     
        <TestimonialsCard
          name={data[index].name}
          img={data[index].img}
          position={data[index].position}
          company={data[index].company}
          project={""}
          index={index}
          text={data[index].text}
          move={moveTo}
        />
        <motion.div 
         initial={{y:50, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{
             duration:0.8,
         }}
        className="absolute -left-[270px] top-64 flex gap-3 items-center">
          <span
          onClick={arrowLeft}
          className="w-10 h-10 rounded-full flex justify-center items-center  border-green-400 border-[1px] shadow-xl shadow-green-600/50 hover:bg-green-400 hover:text-darkgray transition duration-300">
            {" "}
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="text-xs text-slate-500">
            {" "}
            <span className="text-sm text-slate-300">{index+1}</span>/{data.length}{" "}
          </span>
          <span 
          onClick={arrowRight}
          className="w-10 h-10 rounded-full flex justify-center items-center  border-green-400 border-[1px] shadow-xl shadow-green-600/50 hover:bg-green-400 hover:text-darkgray transition duration-300">
            {" "}
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </motion.div>
      </div>
    </div>
  );
}
export default Testimonials;
