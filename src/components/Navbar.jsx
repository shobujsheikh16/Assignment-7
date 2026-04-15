import { NavLink } from "react-router-dom";
import { FaHome, FaClock, FaChartPie } from "react-icons/fa";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "bg-green-700 text-white px-3 py-1 rounded-md flex items-center gap-2"
      : "text-gray-600 hover:text-green-700 flex items-center gap-2";

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">

      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-800">
        Keen<span className="text-green-700">Keeper</span>
      </h1>

      {/* Links */}
      <div className="flex gap-4">

        <NavLink to="/" className={linkStyle}>
          <FaHome /> Home
        </NavLink>

        <NavLink to="/timeline" className={linkStyle}>
          <FaClock /> Timeline
        </NavLink>

        <NavLink to="/stats" className={linkStyle}>
          <FaChartPie /> Stats
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;