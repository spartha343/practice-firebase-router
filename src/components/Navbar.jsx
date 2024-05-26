import { Link } from "react-router-dom";
import useAuthInfo from "../hooks/authInfo/useAuthInfo";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      itemName: "Home"
    },
    {
      path: "/about",
      itemName: "About"
    },
    {
      path: "/dashboard",
      itemName: "Dashboard"
    }
  ];

  const { signTheUserOut, user } = useAuthInfo();
  const handleSignOut = () => {
    signTheUserOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems.map((navItem, idx) => (
              <li key={idx}>
                <Link to={navItem.path}>{navItem.itemName}</Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((navItem, idx) => (
            <li key={idx}>
              <Link to={navItem.path}>{navItem.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <div>
            <Link to="/signup" className="btn mr-3">
              Sign Up
            </Link>
            <Link to="/signin" className="btn">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
