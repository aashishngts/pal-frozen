import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";

import FacebookIcon from "../assets/icons/facebook.png";
import InstagramIcon from "../assets/icons/instagram.png";
import LinkedinIcon from "../assets/icons/linkdin.png";
import WhatsappIcon from "../assets/icons/whatsapp.png";

export default function Footer() {
  return (
    <footer className="bg-[#efeff1] pt-16 sm:pt-20">
      {/* MAIN GRID */}
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-10
          text-sm
          text-gray-700
        "
      >
        {/* QUICK LINKS */}
        <div>
          <h4 className="text-green-800 text-base sm:text-lg mb-4 sm:mb-6">
            Quick Links
          </h4>

          <ul className="space-y-2 sm:space-y-3">
            <li>
              <NavLink to="/" className="hover:text-green-800">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="hover:text-green-800">
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/pal-fresh" className="hover:text-green-800">
                The Frozen Company
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="hover:text-green-800">
                Get In Touch
              </NavLink>
            </li>
          </ul>
        </div>

        {/* ADDRESS */}
        <div>
          <h4 className="text-green-800 text-base sm:text-lg mb-4 sm:mb-6">
            Corporate Address
          </h4>

          <div className="space-y-4 text-sm">
            <p className="flex gap-3 items-start">
              <span>📍</span>
              <span>
                6/2, NAYTA MUNDLA RAOD NEMAWAR ROAD,{" "}
                <span>INDORE, MADHYA PRADESH</span> 452020
              </span>
            </p>

            <p className="flex items-center gap-2">
              <MdEmail className="text-pink-700 text-lg" />
              <span>marketing@sailorexports.com</span>
            </p>
            <p className="flex gap-3">
              <span>📞</span>
              <a
                href="tel:+919879299952"
                className="underline hover:text-green-800"
              >
                +91 9879299952
              </a>
            </p>
            <p className="flex gap-3">
              <span>📞</span>
              <a
                href="tel:+919879299952"
                className="underline hover:text-green-800"
              >
                +91 7879912345
              </a>
            </p>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-green-800 text-base sm:text-lg mb-4 sm:mb-6">
            Connect With Us
          </h4>

          <p className="mb-3 font-medium">The Frozen Company</p>

          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
            <a href="#" aria-label="Whatsapp">
              <img src={WhatsappIcon} alt="Whatsapp" />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          mt-12
          sm:mt-16
          py-4
          sm:py-6
          border-t
          text-xs
          text-gray-600
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          gap-3
        "
      >
        <p className="text-center sm:text-left">
          © 2026 by The Frozen Company.{" "}
          <span className="underline">
            Proudly created with The Frozen Company
          </span>
        </p>

        <a href="#top" className="underline hover:text-green-800">
          Back to Top
        </a>
      </div>
    </footer>
  );
}
