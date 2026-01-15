import banner from "../../assets/palfarm/banner.jpeg";

export default function FarmsBanner() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[260px]
        sm:min-h-[320px]
        lg:min-h-[420px]
        flex
        items-end
      "
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* GREEN OVERLAY */}
      <div
        className="
          w-full
          bg-[#0f5f3a]
          px-6
          sm:px-12
          lg:px-24
          py-6
          sm:py-8
          text-right
          text-white
        "
        style={{
          clipPath:
            window.innerWidth >= 640
              ? "polygon(0 100%, 100% 40%, 100% 100%, 0% 100%)"
              : "none",
        }}
      >
        <h3
          className="
            text-lg
            sm:text-xl
            lg:text-2xl
            font-semibold
            mb-1
            leading-tight
          "
        >
          WHERE RAW EARTH
        </h3>

        <p
          className="
            text-xs
            sm:text-sm
            opacity-90
            leading-snug
          "
        >
          Becomes Real Potential.
        </p>
      </div>
    </section>
  );
}
