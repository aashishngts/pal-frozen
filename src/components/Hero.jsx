import heroVideo from "../assets/hero-video1.mp4";

export default function Hero({
  title = "Serving the freshness",
  subtitle = "Harvested at Peak, Frozen to Perfection",
}) {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] lg:h-[100vh] overflow-hidden">
      
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

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
                whitespace-nowrap
                text-[clamp(1.8rem,5vw,3.5rem)]
              "
            >
              {title}
            </h1>

            {/* SUBTITLE */}
            <p
              className="
                uppercase
                tracking-wide
                text-xs
                sm:text-sm
                md:text-base
                text-gray-700
              "
            >
              {subtitle}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
