import { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-700 text-white navbar flex  justify-between items-center py-4 px-6 md:py-10 md:px-14 ">
      <h1 className="text-left font-bold text-3xl md:text-right">
        <Link to={''}>START FRAMEWORK</Link>
      </h1>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <ul className="mt-2 space-y-2">
            <li>
              <NavLink to={'/about'} className="font-bold uppercase text-lg">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={'/portfolio'} className="font-bold uppercase text-lg">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to={'/contact'} className="font-bold uppercase text-lg">
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </div>

      <ul className="hidden md:flex space-x-4">
        <li>
          <NavLink to={'/about'} className="font-bold uppercase text-lg">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={'/portfolio'} className="font-bold uppercase text-lg">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to={'/contact'} className="font-bold uppercase text-lg">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

