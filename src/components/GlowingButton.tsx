import { motion } from "framer-motion";
import cv from "../assets/doc/Resume.pdf"
function GlowingButton() {
  return (
    <div className="relative group">
      <motion.div
        animate={{ rotate: [0, -2, 0, 2, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute mt-20 inset-0 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-lg blur-md group-hover:blur-lg transotion duration-700"
      ></motion.div>
      <a href={cv} download="Resume.pdf">
      <button className="relative mt-20 bg-black px-7 py-4 rounded-lg flex items-center divide-x divide-gray-600 ">
        <span className="pr-6 flex">
          <span className=" pr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-emerald-500 rotate-6 group-hover:rotate-0 transition duration-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </span>
          <span>2021.09</span>
        </span>
        <span className="text-indigo-400 flex pl-6 gap-4 group-hover:text-indigo-200 transition duration-700 ">
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </span>
      </button>
      </a>
    </div>
  );
}
export default GlowingButton;
