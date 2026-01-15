import fridge from "../../assets/icons/fridge.png";
import gear from "../../assets/icons/gear.png";
import handshake from "../../assets/icons/handshake.png";
import stopwatch from "../../assets/icons/stopwatch.png";
import india from "../../assets/icons/made-in-india.png";

export default function GlobalTrustIndicators() {
  return (
    <section className="py-32 text-center">
      {/* Heading */}
      <h2 className="text-green-800 text-lg font-medium tracking-wide mb-20">
        TRUSTED GLOBAL PLAYERS
        <br />
        PAL FROZEN FOODS
      </h2>

      {/* Icons */}
      <div className="max-w-6xl mx-auto grid grid-cols-5 gap-16">
        <div className="flex flex-col items-center">
          <img src={fridge} className="h-20 mb-6" alt="" />
          <p className="text-sm">Long Shelf Life</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={gear} className="h-20 mb-6" alt="" />
          <p className="text-sm">Controlled Process</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={handshake} className="h-20 mb-6" alt="" />
          <p className="text-sm">Consistent Quality</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={stopwatch} className="h-20 mb-6" alt="" />
          <p className="text-sm">Quick Turnaround Time</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={india} className="h-20 mb-6" alt="" />
          <p className="text-sm">Made In India</p>
        </div>
      </div>
    </section>
  );
}
