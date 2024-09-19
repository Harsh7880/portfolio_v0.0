import { NAVIBATIONS_LINKS } from "../utils/constants";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="mb-20 mt-10 flex items-center justify-between ml-20">
      <div className="flex w-30 items-center">
        <NavLink>
          {" "}
          <h1 className="text-3xl text-white/80 font-bold font-Mogra">
            {" "}
            {"<Harsh />"}
          </h1>
        </NavLink>
      </div>
      <div className="bg-slate/10 backdrop:blur-2xl rounded-full px-1 py-4 shadow-lg shadow-black/40 ">
        {NAVIBATIONS_LINKS.map((navItem, index) => (
          <NavLink
            to={navItem.path}
            key={index}
            className="text-sm font-bold mx-2 hover:bg-gradient-to-r from-[#29323c] via-[#485563] to-[#2b5876] px-4 py-2.5 rounded-full hover:text-white/80 transition-all duration-300"
          >
            {navItem.element}{" "}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a
          href="#"
          className="text-lg text-white text-center py-2.5 px-10 block rounded-full shadow-[0_4px_15px_0_rgba(45,54,65,0.75)] transition-all duration-500 border border-gradient-to-r hover:border-none from-[#29323c] via-[#485563] to-[#2b5876] hover:bg-[linear-gradient(to_right,#29323c,#485563,#2b5876,#4e4376)] hover:no-underline"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
