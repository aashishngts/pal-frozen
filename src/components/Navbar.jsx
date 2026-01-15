import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <NavLink to="/" className="flex items-center">
          <img
            src="https://static.wixstatic.com/media/852e77_3efaa783499c4e4b98704e0b98263938~mv2.png"
            alt="PAL Frozen Foods Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </NavLink>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10 text-gray-800 font-medium">
          {[
            { name: "Home", to: "/" },
            { name: "About Us", to: "/about" },
            { name: "Pal Fresh", to: "/pal-fresh" },
            { name: "Frozzo", to: "/frozzo" },
            { name: "Blog", to: "/blog" },
            { name: "Get In Touch", to: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors ${
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

        {/* MOBILE MENU ICON (future ready) */}
        <button className="md:hidden text-gray-800">
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
        </button>
      </div>
    </header>
  );
}
