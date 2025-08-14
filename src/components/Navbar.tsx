import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="absolute left-1/2 top-1 -translate-x-1/2 translatex py-2 z-10 mt-4 text-neutral-500 text-lg">
      <nav className="border rounded-4xl md:border-0 md:rounded-none lg:rounded-none lg:border-0 flex gap-1  lg:gap-2 p-1 ">
        <NavLink className="rounded-3xl hover:bg-neutral-200  px-4 py-2" to="/">
          Work
        </NavLink>
        <NavLink
          className="rounded-3xl hover:bg-neutral-200 px-4 py-2 transition-all"
          to="/About"
        >
          About
        </NavLink>
        <NavLink
          className="rounded-3xl hover:bg-neutral-200 px-4 py-2 transition-all"
          to="/Blogs"
        >
          Blogs
        </NavLink>
        {/* <Link to="/Resume">Resume</Link> */}
      </nav>
    </header>
  );
};

export default Navbar;
