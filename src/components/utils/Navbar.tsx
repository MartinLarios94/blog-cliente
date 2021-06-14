import { NavLink } from "react-router-dom";

export default function Menu() {
  const classActive = "active";
  return (
    <nav className="flex">
      <div className="px-4 cursor-pointer">
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
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 ">
        <NavLink className="p-4" activeClassName={classActive} to="/">
          Courses
        </NavLink>
        <NavLink className="p-4" activeClassName={classActive} to="/generos">
          Coaching
        </NavLink>
        <NavLink className="p-4" activeClassName={classActive} to="/generos">
          Community
        </NavLink>
        <NavLink className="p-4" activeClassName={classActive} to="/generos">
          Workshops
        </NavLink>
        <NavLink className="p-4" activeClassName={classActive} to="/generos">
          Login
        </NavLink>
      </div>
    </nav>
  );
}
