import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="absolute bg-[#18B2DE] h-[150px] w-[800px] m-auto -top-[120px] filter blur-[90px] -z-10"></div>
      <div className="flex justify-center items-center gap-5 text-purpleGrey font-medium transition-all duration-300">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white" : "hover:text-white"
          }
        >
          Signup
        </NavLink>
        <NavLink
          to="/podcasts"
          className={({ isActive }) =>
            isActive ? "text-white" : "hover:text-white"
          }
        >
          Podcasts
        </NavLink>
        <NavLink
          to="/start-podcast"
          className={({ isActive }) =>
            isActive ? "text-white" : "hover:text-white"
          }
        >
          Start a Podcast
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-white" : "hover:text-white"
          }
        >
          Profile
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
