import FacebookIcon from "../../assets/icons/facebook.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import LinkedinIcon from "../../assets/icons/linkdin.png";

export default function ContactFooterSection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
          md:gap-16
          text-xs
          sm:text-sm
          text-gray-700
        "
      >
        {/* ================= ADDRESS ================= */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4 sm:mb-6">Address</h4>
          <p className="leading-relaxed">
            Palam City, Devalchaur, Opp. Pal
            <br />
            Ford, Rampur Road, Haldwani -
            <br />
            263139
          </p>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4 sm:mb-6">Contact</h4>
          <p className="mb-2">+91 9045599277</p>
          <p className="break-all sm:break-normal">
            marketing@smpalgroup.com
          </p>
        </div>

        {/* ================= SOCIAL MEDIA ================= */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4 sm:mb-6">
            Social Media Links
          </h4>

          {/* PAL FRESH */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6 mb-4">
            <span className="sm:w-20 font-medium">Pal Fresh</span>
            <div className="flex gap-4 justify-center sm:justify-start">
              <img
                src={FacebookIcon}
                alt="Facebook"
                className="h-5 cursor-pointer hover:scale-110 transition"
              />
              <img
                src={LinkedinIcon}
                alt="LinkedIn"
                className="h-5 cursor-pointer hover:scale-110 transition"
              />
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="h-5 cursor-pointer hover:scale-110 transition"
              />
            </div>
          </div>

          {/* FROZZO */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6">
            <span className="sm:w-20 font-medium">Frozzo</span>
            <div className="flex gap-4 justify-center sm:justify-start">
              <img
                src={FacebookIcon}
                alt="Facebook"
                className="h-5 cursor-pointer hover:scale-110 transition"
              />
              <img
                src={LinkedinIcon}
                alt="LinkedIn"
                className="h-5 cursor-pointer hover:scale-110 transition"
              />
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="h-5 cursor-pointer hover:scale-110 transition"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
