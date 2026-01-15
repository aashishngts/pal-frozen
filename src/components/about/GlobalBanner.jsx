import sea from "../../assets/palfreshglobal/sea.jpeg";

export default function GlobalBanner() {
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
        backgroundImage: `url(${sea})`,
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
          text-white
        "
        style={{
          clipPath:
            window.innerWidth >= 640
              ? "polygon(0 40%, 100% 0, 100% 100%, 0% 100%)"
              : "none",
        }}
      >
        <p className="text-xs sm:text-sm font-semibold tracking-wide">
          A LEGACY EXPANDING GLOBALLY
        </p>
        <p className="text-xs sm:text-sm opacity-90 mt-1">
          Make in India to Make for the World.
        </p>
      </div>
    </section>
  );
}
