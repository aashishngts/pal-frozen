import heroVideo from "../assets/hero-video1.mp4";

export default function Hero({
  subtitle = "Harvested at Peak, Frozen to Perfection",
}) {
  return (
    <section
      className="
        relative
        h-[55vh]
        sm:h-[65vh]
        md:h-[70vh]
        lg:h-[100vh]
        overflow-hidden
      "
    >
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* TITLE */}
            <h1
              className="
    font-bold
    text-[#179EDB]
    mb-4
    leading-tight
    text-left
    text-[clamp(1.5rem,5vw,3.5rem)]
  "
            >
              Serving the
              <span className="block md:inline"> freshness</span>
            </h1>

            {/* SUBTITLE */}
            <p
              className="
    uppercase
    tracking-wide
    text-[10px]
    sm:text-sm
    md:text-base
    text-gray-700
  "
            >
              HARVESTED AT PEAK,
              <span className="block md:inline"> FROZEN TO PERFECTION</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
