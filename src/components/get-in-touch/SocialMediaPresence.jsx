import PalFreshLogo from "../../assets/getintouch/palfresh.png";
import FrozzoLogo from "../../assets/getintouch/frozzo.png";

import Instagram from "../../assets/icons/instagram.png";
import Facebook from "../../assets/icons/facebook.png";
import Linkedin from "../../assets/icons/linkdin.png";
import Youtube from "../../assets/icons/youtube.png";

export default function SocialMediaPresence() {
  return (
    <section className="py-28 bg-white">
      {/* HEADING */}
      <h2 className="text-center text-3xl md:text-4xl font-medium text-[#3b2a1f] mb-24">
        Our Social Media Presence
      </h2>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        
        {/* PALFRESH */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          {/* LOGO */}
          <div className="flex justify-center md:justify-start">
            <img
              src={PalFreshLogo}
              alt="Palfresh"
              className="h-20 object-contain"
            />
          </div>

          {/* NAME */}
          <p className="text-center md:text-left text-lg text-[#3b2a1f]">
            Palfresh
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-end gap-5">
            <img src={Instagram} className="h-8 cursor-pointer" />
            <img src={Facebook} className="h-8 cursor-pointer" />
            <img src={Linkedin} className="h-8 cursor-pointer" />
            <img src={Youtube} className="h-8 cursor-pointer" />
          </div>
        </div>

        {/* FROZZO */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          {/* LOGO */}
          <div className="flex justify-center md:justify-start">
            <img
              src={FrozzoLogo}
              alt="Frozzo"
              className="h-20 object-contain"
            />
          </div>

          {/* NAME */}
          <p className="text-center md:text-left text-lg text-[#3b2a1f]">
            Frozzo
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-end gap-5">
            <img src={Instagram} className="h-8 cursor-pointer" />
            <img src={Facebook} className="h-8 cursor-pointer" />
            <img src={Linkedin} className="h-8 cursor-pointer" />
            <img src={Youtube} className="h-8 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* DIVIDER LINE */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <div className="h-[2px] bg-[#3b2a1f]" />
      </div>
    </section>
  );
}
