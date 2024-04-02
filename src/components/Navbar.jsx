import logo from "/logo.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavLinks = [
    {
      text: "About Us",
      url: "../AboutUs",
    },
    {
      text: "Members",
      url: "../Members",
    },
    {
      text: "Videos",
      url: "../Videos",
    },
    {
      text: "Hire Us",
      url: "../HireUs",
    },
    {
      text: "Auditions",
      url: "../Auditions",
    },
  ];
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="badge gap-3 py-6 border-none font-semibold text-xl">
            <img src={logo} className="size-9 rounded-full" />
            <span>Noteworthy</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavLinks.map(({ text, url }, index) => (
              <li className="mx-1" key={index}>
                <NavLink
                  to={url}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="dark"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
