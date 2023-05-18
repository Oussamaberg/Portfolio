function Navbar() {
  return (
    <nav className="">
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center gap-2">
          <span className=" rounded-full border-2 p-1 border-slate-400  cursor-pointer ">
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
          </span>
          <span className="text-xs font-mono">Ossama.berghai@gmail.com</span>
        </div>

        <div className=" flex gap-4">
          <span className="hover:bg-blue-500 p-1 rounded-xl hover:shadow-lg hover:text-darkgray font-bold hover:shadow-blue-500/50 transition duration-700  cursor-pointer">
            Linkdin
          </span>
          <span className="hover:bg-blue-400 p-1 rounded-xl hover:shadow-lg hover:text-darkgray font-bold hover:shadow-blue-300/50 transition duration-700  cursor-pointer">
            Tweeter
          </span>
          <span className="hover:bg-slate-300 p-1 rounded-xl hover:shadow-lg hover:text-darkgray font-bold hover:shadow-slate-300/50 transition duration-700  cursor-pointer">
            Github
          </span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
