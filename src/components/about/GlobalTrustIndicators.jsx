import fridge from "../../assets/icons/fridge.png";
import gear from "../../assets/icons/gear.png";
import handshake from "../../assets/icons/handshake.png";
import stopwatch from "../../assets/icons/stopwatch.png";
import india from "../../assets/icons/made-in-india.png";

export default function GlobalTrustIndicators() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 text-center">
      {/* Heading */}
      <h2 className="
        text-green-800
        text-base
        sm:text-lg
        font-medium
        tracking-wide
        mb-12
        sm:mb-16
        lg:mb-20
      ">
        TRUSTED GLOBAL PLAYERS
        <br />
        PAL FROZEN FOODS
      </h2>

      {/* Icons */}
      <div className="
        max-w-6xl
        mx-auto
        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-5
        gap-10
        sm:gap-14
        lg:gap-16
        px-4
        sm:px-6
      ">
        {/* ITEM */}
        <div className="flex flex-col items-center">
          <img
            src={fridge}
            alt="Long Shelf Life"
            className="h-14 sm:h-16 lg:h-20 mb-4 sm:mb-6"
          />
          <p className="text-xs sm:text-sm">
            Long Shelf Life
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={gear}
            alt="Controlled Process"
            className="h-14 sm:h-16 lg:h-20 mb-4 sm:mb-6"
          />
          <p className="text-xs sm:text-sm">
            Controlled Process
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={handshake}
            alt="Consistent Quality"
            className="h-14 sm:h-16 lg:h-20 mb-4 sm:mb-6"
          />
          <p className="text-xs sm:text-sm">
            Consistent Quality
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={stopwatch}
            alt="Quick Turnaround Time"
            className="h-14 sm:h-16 lg:h-20 mb-4 sm:mb-6"
          />
          <p className="text-xs sm:text-sm">
            Quick Turnaround Time
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={india}
            alt="Made in India"
            className="h-14 sm:h-16 lg:h-20 mb-4 sm:mb-6"
          />
          <p className="text-xs sm:text-sm">
            Made In India
          </p>
        </div>
      </div>
    </section>
  );
}
