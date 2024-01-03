import { IoLogoGithub, IoLogoLinkedin, IoMdPeople } from "react-icons/io";
import { Navbar } from "../components/navbar/Navbar";
import PropTypes from "prop-types";

const links = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/armando-diaz-291385251/",
    icon: IoLogoLinkedin,
  },
  {
    name: "github",
    href: "https://github.com/adiazt01",
    icon: IoLogoGithub,
  },
  {
    name: "admin",
    href: "/admin",
    icon: IoMdPeople
  }
];

export const LayoutBlog = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container relative px-8 my-8 m-auto">{children}</div>
      <footer className="mt-32 bg-white rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Armando Dev
            </span>
            <ul className="flex text-zinc-700 flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
              {links.map((link) => (
                <li key={link.name} className="mt-3 mr-2">
                  <a
                    href={link.href}
                    className="inline-block px-3 py-1 transition duration-300 ease-in-out rounded"
                  >
                    <link.icon className="inline-block w-5 h-5 mr-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-700 sm:text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Armando Diaz
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

LayoutBlog.propTypes = {
  children: PropTypes.node.isRequired,
};
