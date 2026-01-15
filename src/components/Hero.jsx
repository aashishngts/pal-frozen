import heroVideo from "../assets/hero-video.mp4";

export default function Hero({
  title = "Serving the freshness",
  subtitle = "From our farms, to your freezer!",
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

      {/* TEXT CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-semibold
              text-green-800
              mb-4
              leading-tight
            ">
              {title}
            </h1>

            <p className="
              uppercase
              tracking-wide
              text-xs
              sm:text-sm
              md:text-base
              text-gray-700
            ">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
