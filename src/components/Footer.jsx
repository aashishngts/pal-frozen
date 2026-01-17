import { NavLink } from "react-router-dom";

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
        lg:grid-cols-4
        gap-10
        text-sm
        text-gray-700
      "
      >
        {/* ABOUT */}
        <div>
          <h4 className="text-green-800 text-base sm:text-lg mb-4 sm:mb-6">
            About Us
          </h4>
          <p className="leading-relaxed text-sm">
            The Frozen Company is a trusted name in the frozen food industry,
            delivering high-quality products to global markets through strict
            quality and cold-chain standards.
          </p>
        </div>

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
              <NavLink to="/blog" className="hover:text-green-800">
                Blog
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
                179/3, Patthar Mundla Rd, Palda Naka, Dinesh Nagar, Palda,{" "}
                <b>Indore, Madhya Pradesh</b> 452001
              </span>
            </p>

            <p className="flex gap-3">
              <span>📞</span>
              <a
                href="tel:+916269699699"
                className="underline hover:text-green-800"
              >
                +91 6269699699
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
          © 2025 by The Frozen Company.{" "}
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
