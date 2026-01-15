import FacebookIcon from "../assets/icons/facebook.png";
import InstagramIcon from "../assets/icons/instagram.png";
import LinkedinIcon from "../assets/icons/linkdin.png";
import WhatsappIcon from "../assets/icons/whatsapp.png";

export default function Footer() {
  return (
    <footer className="bg-[#efeff1] pt-16 sm:pt-20">
      {/* MAIN GRID */}
      <div className="
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
      ">
        {/* ABOUT */}
        <div>
          <h4 className="text-green-800 text-base sm:text-lg mb-4 sm:mb-6">
            About Us
          </h4>
          <p className="leading-relaxed text-sm">
            In 2013, SM Pal Group entered the field of agriculture-based
            processing as Pal Frozen Foods specializing in planning, processing,
            and producing quality vegetables and snacks under brands “Pal Fresh”
            and Frozzo. With homegrown supplies and our own frozen plant in
            Haldwani, Uttarakhand and Depots in metro cities like Lucknow,
            Bangalore, Dehradun, Kochi, etc.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-green-800 text-base sm:text-lg mb-4 sm:mb-6">
            Quick Links
          </h4>
          <ul className="space-y-2 sm:space-y-3">
            <li className="hover:text-green-800 cursor-pointer">HOME</li>
            <li className="hover:text-green-800 cursor-pointer">About Us</li>
            <li className="hover:text-green-800 cursor-pointer">
              Frozen Vegetables
            </li>
            <li className="hover:text-green-800 cursor-pointer">
              Frozen Snacks
            </li>
            <li className="hover:text-green-800 cursor-pointer">Careers</li>
            <li className="hover:text-green-800 cursor-pointer">
              Become a Distributor
            </li>
            <li className="hover:text-green-800 cursor-pointer">
              Privacy Policy
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
                Palam City, Devalchaur, Opp. Pal Ford, Rampur Road, Haldwani –{" "}
                <b>Uttarakhand</b> 263139
              </span>
            </p>

            <p className="flex gap-3">
              <span>📞</span>
              <a
                href="tel:+919045599277"
                className="underline hover:text-green-800"
              >
                +91 9045599277
              </a>
            </p>

            <p className="flex gap-3">
              <span>✉️</span>
              <a
                href="mailto:marketing@smpalgroup.com"
                className="underline hover:text-green-800"
              >
                marketing@smpalgroup.com
              </a>
            </p>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-green-800 text-base sm:text-lg mb-4 sm:mb-6">
            Connect With Us
          </h4>

          {/* PAL FRESH */}
          <div className="mb-6 sm:mb-8">
            <p className="mb-3 font-medium">Pal Fresh</p>
            <div className="flex gap-4">
              <a className="social-icon">
                <img src={FacebookIcon} alt="Facebook" />
              </a>
              <a className="social-icon">
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a className="social-icon">
                <img src={LinkedinIcon} alt="LinkedIn" />
              </a>
              <a className="social-icon">
                <img src={WhatsappIcon} alt="Whatsapp" />
              </a>
            </div>
          </div>

          {/* FROZZO */}
          <div>
            <p className="mb-3 font-medium">Frozzo</p>
            <div className="flex gap-4">
              <a className="social-icon">
                <img src={FacebookIcon} alt="Facebook" />
              </a>
              <a className="social-icon">
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a className="social-icon">
                <img src={LinkedinIcon} alt="LinkedIn" />
              </a>
              <a className="social-icon">
                <img src={WhatsappIcon} alt="Whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="
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
      ">
        <p className="text-center sm:text-left">
          © 2023 by Pal Fresh.{" "}
          <span className="underline">
            Proudly created with Pal Frozen Foods
          </span>
        </p>

        <a href="#" className="underline hover:text-green-800">
          Back to Top
        </a>
      </div>
    </footer>
  );
}
