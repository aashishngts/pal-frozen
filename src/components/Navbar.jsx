import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/frozen_logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "The Frozen Company", to: "/pal-fresh" },
    { name: "Blog", to: "/blog" },
    { name: "Get In Touch", to: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <NavLink to="/" className="flex items-center">
          <img
            src={Logo}
            alt="PAL Frozen Foods Logo"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain"
          />
        </NavLink>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10 text-gray-800 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-[#179EDB]"
                    : "hover:text-[#0f77a7]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-gray-800 z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? (
            /* CLOSE ICON */
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* HAMBURGER ICON */
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden
          fixed
          top-0
          right-0
          h-screen
          w-3/4
          bg-white
          shadow-lg
          z-50
          transform
          transition-transform
          duration-300
          ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <nav className="flex flex-col gap-6 px-8 pt-24 text-gray-800 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "text-purple-600"
                    : "hover:text-purple-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
