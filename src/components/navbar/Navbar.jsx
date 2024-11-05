import { useState } from "react";
import Button from "../ui/Button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    document.getElementsByTagName("html")[0].classList.toggle("dark");
    setIsDark(!isDark);
    console.log(isDark);
  };

  return (
    <header className="bg-light-navbarBg  dark:bg-dark-navbarBg">
      <nav className="relative container  mx-auto flex lg:justify-around justify-between items-center p-4 z-[9999]">
        <figure className="flex items-center gap-2 cursor-pointer">
          <img src="/logo.svg" alt="logo" />
          <h3 className="dark:text-dark-headingText text-light-headingText font-medium text-lg">
            FinBiz
          </h3>
        </figure>

        <ul className="hidden md:flex md:gap-5 md:text-md dark:text-dark-paragraphText text-light-paragraphText">
          <li className="cursor-pointer dark:hover:text-white hover:text-red-400 dark:hover:text-dark-buttonHover">
            Products
          </li>
          <li className="cursor-pointer dark:hover:text-white hover:text-red-400 dark:hover:text-dark-buttonHover">
            Pages
          </li>
          <li className="cursor-pointer dark:hover:text-white hover:text-red-400 dark:hover:text-dark-buttonHover">
            Integrations
          </li>
          <li className="cursor-pointer dark:hover:text-white hover:text-red-400 dark:hover:text-dark-buttonHover">
            Blog
          </li>
          <li className="cursor-pointer dark:hover:text-white hover:text-red-400 dark:hover:text-dark-buttonHover">
            Pricing
          </li>
        </ul>

        <button
          className="md:hidden flex items-center p-2"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-black dark:text-white"
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
            ></path>
          </svg>
        </button>

        <div
          className={`fixed inset-0 bg-light-buttonBg dark:bg-dark-buttonBg text-light-paragraphText dark:text-dark-paragraphText transition-transform transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } md:hidden z-[9999]`}
        >
          <button
            className="absolute top-4 right-4 text-black dark:text-white"
            onClick={toggleMenu}
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <ul className="flex flex-col gap-5 p-4">
            <li
              className="cursor-pointer hover:text-white dark:hover:text-dark-buttonHover"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </li>
            <li
              className="cursor-pointer hover:text-white dark:hover:text-dark-buttonHover"
              onClick={() => setIsMenuOpen(false)}
            >
              Pages
            </li>
            <li
              className="cursor-pointer hover:text-white dark:hover:text-dark-buttonHover"
              onClick={() => setIsMenuOpen(false)}
            >
              Integrations
            </li>
            <li
              className="cursor-pointer hover:text-white dark:hover:text-dark-buttonHover"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </li>
            <li
              className="cursor-pointer hover:text-white dark:hover:text-dark-buttonHover"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </li>

            {/* Add the Button component here for mobile menu */}
            <Button
              functionSend={toggleTheme}
              text={isDark ? "Light 🌞" : "Dark 🌙"}
              className="rounded-3xl bg-light-buttonBg hover:dark:bg-gray-800 dark:bg-dark-buttonBg text-black dark:text-white p-3 w-28 text-sm font-medium shadow-inner-top-light dark:shadow-inner-top-dark hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover"
            />
          </ul>
        </div>

        <Button
          functionSend={toggleTheme}
          text={isDark ?  "Dark 🌙" : "Light 🌞"}
          className="hidden md:block rounded-3xl bg-light-buttonBg hover:dark:bg-gray-800 dark:bg-dark-buttonBg text-black dark:text-white p-3 w-28 text-sm font-medium shadow-inner-top-light dark:shadow-inner-top-dark hover:bg-light-buttonHover dark:hover:bg-dark-buttonHover"
        />
      </nav>
    </header>
  );
}

export default Navbar;
