import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const svgHome = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
)

const svgTeam = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const svgBlog = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504 1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
  </svg>
)

const svgAbout = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.420.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 003 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
  </svg>
)

const svgHire = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
)

const svgContact = (
  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 21">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M7.24 7.194a24.16 24.16 0 0 1 3.72-3.062m0 0c3.443-2.277 6.732-2.969 8.24-1.46 2.054 2.053.03 7.407-4.522 11.959-4.552 4.551-9.906 6.576-11.96 4.522C1.223 17.658 1.89 14.412 4.121 11m6.838-6.868c-3.443-2.277-6.732-2.969-8.24-1.46-2.054 2.053-.03 7.407 4.522 11.959m3.718-10.499a24.16 24.16 0 0 1 3.719 3.062M17.798 11c2.23 3.412 2.898 6.658 1.402 8.153-1.502 1.503-4.771.822-8.2-1.433m1-6.808a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
  </svg>
)

const svgToggle = (
  <svg
    className="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 1h15M1 7h15M1 13h15"
    />
  </svg>
)

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="py-2 px-2 fixed top-0 left-0 w-full z-40">
        <div className="mx-auto max-w-4xl">
          {/* Navigation for mobile */}
          <nav className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 rounded-xl items-center shadow-md md:hidden">
            <div className="flex justify-between items-center gap-x-3 px-5 py-2">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                {svgToggle}
              </button>
              <div className="flex items-center md:hidden">
                <button className="gap-x-1 before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center">
                  {svgHire}
                  <span className="hidden md:block">Hire Me</span>
                </button>
              </div>
            </div>
            {/* Navigation for mobile */}

            {/* Navigation links */}
            <div className={`md:flex md:w-auto ${isMenuOpen ? "block" : "hidden"}`} id="navbar-default">
              <div className="flex flex-col md:flex-row px-5 py-2 items-center">
                <NavLink to="/" className={({ isActive }) => isActive ? "bg-gray-200 rounded-xl p-2 w-full md:w-auto transition-all duration-300" : "opacity-50 p-2 w-full md:w-auto hover:bg-gray-200 rounded-xl transition-all duration-300 hover-opacity-100"}>
                  <div className="flex items-center justify-center">
                    {svgHome}
                    <span className="ml-2">Home</span>
                  </div>
                </NavLink>
                <NavLink to="/team" className={({ isActive }) => isActive ? "bg-gray-200 rounded-xl p-2 w-full md:w-auto transition-all duration-300" : "opacity-50 p-2 w-full md:w-auto hover:bg-gray-200 rounded-xl transition-all duration-300 hover-opacity-100"}>
                  <div className="flex items-center justify-center">
                    {svgTeam}
                    <span className="ml-2">Team</span>
                  </div>
                </NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? "bg-gray-200 rounded-xl p-2 w-full md:w-auto transition-all duration-300" : "opacity-50 p-2 w-full md:w-auto hover:bg-gray-200 rounded-xl transition-all duration-300 hover-opacity-100"}>
                  <div className="flex items-center justify-center">
                    {svgBlog}
                    <span className="ml-2">Blog</span>
                  </div>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "bg-gray-200 rounded-xl p-2 w-full md:w-auto transition-all duration-300" : "opacity-50 p-2 w-full md:w-auto hover:bg-gray-200 rounded-xl transition-all duration-300 hover-opacity-100"}>
                  <div className="flex items-center justify-center">
                    {svgAbout}
                    <span className="ml-2">About</span>
                  </div>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "bg-gray-200 rounded-xl p-2 w-full md:w-auto transition-all duration-300" : "opacity-50 p-2 w-full md:w-auto hover:bg-gray-200 rounded-xl transition-all duration-300 hover-opacity-100"}>
                  <div className="flex items-center justify-center">
                    {svgContact}
                    <span className="ml-2">Contact</span>
                  </div>
                </NavLink>
              </div>
            </div>
          </nav>
          {/* Navigation links */}

          {/* Navigation for desktop */}
          <nav className="hidden md:flex md:w-auto md:bg-white md:bg-opacity-40 md:backdrop-filter md:backdrop-blur-lg md:rounded-xl md:items-center md:shadow-md">
            <div className="flex flex-col md:flex-row px-5 py-2 items-center justify-between w-full">
              <div className="flex items-center">
                <NavLink to="/" className={({ isActive }) => isActive ? "bg-gray-200 rounded-xl p-2 w-full md:w-auto transition-all duration-300" : "opacity-50 p-2 w-full md:w-auto hover:bg-gray-200 rounded-xl transition-all duration-300 hover-opacity-100"}>
                  <div className="flex items-center justify-center">
                    {svgHome}
                    <span className="ml-2">Home</span>
                  </div>
                </NavLink>
                <NavLink to="/team" className={({ isActive }) => isActive ? "bg-gray-200 rounded-xl p-2 w-full md:w-auto transition-all duration-300" : "opacity-50 p-2 w-full md:w-auto hover:bg-gray-200 rounded-xl transition-all duration-300 hover-opacity-100"}>
                  <div className="flex items-center justify-center">
                    {svgTeam}
                    <span className="ml-2">Team</span>
                  </div>
                </NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? "bg-gray-200 rounded-xl p-2 w-full md:w-auto transition-all duration-300" : "opacity-50 p-2 w-full md:w-auto hover:bg-gray-200 rounded-xl transition-all duration-300 hover-opacity-100"}>
                  <div className="flex items-center justify-center">
                    {svgBlog}
                    <span className="ml-2">Blog</span>
                  </div>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "bg-gray-200 rounded-xl p-2 w-full md:w-auto transition-all duration-300" : "opacity-50 p-2 w-full md:w-auto hover:bg-gray-200 rounded-xl transition-all duration-300 hover-opacity-100"}>
                  <div className="flex items-center justify-center">
                    {svgAbout}
                    <span className="ml-2">About</span>
                  </div>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "bg-gray-200 rounded-xl p-2 w-full md:w-auto transition-all duration-300" : "opacity-50 p-2 w-full md:w-auto hover:bg-gray-200 rounded-xl transition-all duration-300 hover-opacity-100"}>
                  <div className="flex items-center justify-center">
                    {svgContact}
                    <span className="ml-2">Contact</span>
                  </div>
                </NavLink>
              </div>
              <NavLink to="/hire" className="bg-gray-800 rounded-xl p-2 transition-all duration-300 text-white">
                <div className="flex items-center justify-center">
                  {svgHire}
                  <span className="ml-2">Hire Me</span>
                </div>
              </NavLink>
            </div>
            <ThemeSwitcher/>
          </nav>
          {/* Navigation for desktop */}

        </div>
      </header>
    </>
  );
};

export default Navbar;
