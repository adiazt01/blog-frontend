import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

export const NavbarCMS = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <Link to="/">
        <IoMdHome className="text-3xl" />
        <span className="sr-only">Blog Logo</span>
      </Link>
      <nav>
        <a className="mr-4" href="#">
          About
        </a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};
