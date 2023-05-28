function Footer() {
  const scrollToSection = (anchor:string) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const date = new Date();
  return (
    <div className=" relative flex flex-col h-40  w-full  justify-center  items-center border-t-2 gap-2  p-10 text-xs mb-2 mt-60 text-darkgray">
      <a onClick={() => scrollToSection("nav")} href="#about"><div  className=" absolute   animate-bounce right-0 top-0 mt-5 mr-1 opacity-75 bg-green-400 w-16 h-16  rounded-full flex justify-center items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
      </a>
      <div className="text-slate-300">
        Portfolio {date.getFullYear()} with ❤️ using:
      </div>
      <div>
        <span className="bg-blue-300 p-1 rounded-lg mt-1 mr-2">
          <a href="https://react.dev">React.js</a>
        </span>
        <span className="p-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-300 rounded-lg mt-1">
          TailwindCSS
        </span>
      </div>
    </div>
  );
}
export default Footer;
