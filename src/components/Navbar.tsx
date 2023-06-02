import { useState } from "react";
import SideMenu from "./SideMenu";
import { AnimatePresence } from "framer-motion";

function Navbar() {
  const env = import.meta.env;
  const [sideMenu, setSideMenu] = useState(false);
  const toggleSideMenu = () => {
    if (sideMenu == true) {
      setSideMenu(false);
    } else {
      setSideMenu(true);
    }
  };
  return (
    <nav className="relative " id="nav-section">
      <AnimatePresence>
        {sideMenu && <SideMenu toggle={toggleSideMenu} />}
      </AnimatePresence>
      <div className="flex  justify-between items-center p-2">
        <div className="flex items-center gap-2">
          <span className=" rounded-full border-2 p-1 border-slate-400  cursor-pointer ">
            <a href={`mailto:${env.VITE_EMAIL}`}>
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </a>
          </span>
          <span className="text-xs font-mono">{env.VITE_EMAIL}</span>
        </div>

        <div className="flex gap-2">
          <div className=" hidden sm:flex gap-4">
            <a href={env.VITE_LINKEDIN}>
              <span className="hover:bg-blue-500 p-1 rounded-xl hover:shadow-lg hover:text-darkgray font-bold hover:shadow-blue-500/50 transition duration-700  cursor-pointer">
                Linkdin
              </span>
            </a>
            <a href={env.VITE_TWITTER}>
              <span className="hover:bg-blue-400 p-1 rounded-xl hover:shadow-lg hover:text-darkgray font-bold hover:shadow-blue-300/50 transition duration-700  cursor-pointer">
                Twitter
              </span>
            </a>
            <a href={env.VITE_GITHUB}>
              <span className="hover:bg-slate-300 p-1 rounded-xl hover:shadow-lg hover:text-darkgray font-bold hover:shadow-slate-300/50 transition duration-700  cursor-pointer">
                Github
              </span>
            </a>
          </div>
          <span onClick={toggleSideMenu} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
