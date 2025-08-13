import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <header className="flex items-center justify-between bg-neutral-50 shadow-xs py-2 px-10">
      <h1 className="text-2xl">DevPortFolio</h1>
      <nav className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Work">Work</Link>
        <Link to="/Resume">Resume</Link>
      </nav>
    </header>
  );
};

export default Navbar;
