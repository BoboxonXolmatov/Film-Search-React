import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-300 px-10 mb-10">
        <div className="flex-1">
          <a className="cursor-pointer text-3xl ">Film</a>
        </div>
        <div className="navbar navbar-start w-50">
          <ul className="mt-1 p-5 shadow bg-base-100 rounded-box gap-10">
            <li>
              <Link className="text-xl font-extralight text-neutral-300" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-xl font-extralight text-neutral-300"
                to="/LogIn">
                Log In
              </Link>
            </li>
            <li>
              <Link
                className="text-xl font-extralight text-neutral-300"
                to="LogOut">
                Log Out
              </Link>
            </li>
            <li>
              <Link
                className="text-xl font-extralight text-neutral-300"
                to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* SEARCH */}
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <FcLike className="w-10 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
