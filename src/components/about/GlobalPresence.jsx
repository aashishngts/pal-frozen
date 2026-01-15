export default function GlobalPresence() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TOP TITLE */}
        <h2 className="text-green-800 font-semibold text-lg tracking-wide">
          TOP FROZEN FOOD EXPORTER -
        </h2>
        <h3 className="text-green-800 font-semibold text-lg mt-1">
          PAL FROZEN FOODS
        </h3>

        {/* DESCRIPTION */}
        <p className="max-w-4xl mx-auto mt-10 text-sm text-gray-600 leading-relaxed">
          At Pal Frozen Foods, we believe that good food knows no boundaries.
          With years of expertise in frozen vegetables and snacks, we have
          grown into a thriving exporter of premium-quality products to
          international markets. We bring the authentic freshness of India
          to dining tables across the globe. Recognized among the top food
          exporters in India, we take pride in being a trusted partner for
          global businesses seeking reliable and high-quality frozen food
          solutions.
        </p>

        {/* GLOBAL PRESENCE */}
        <h2 className="text-green-800 font-semibold text-xl mt-32">
          OUR GLOBAL PRESENCE
        </h2>

        {/* FLAGS ROW */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-10 text-sm">

          {/* Nepal */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <img
                src="https://flagcdn.com/w40/np.png"
                alt="Nepal"
                className="h-6"
              />
              <span>Nepal</span>
            </div>
            <span className="text-gray-400">→</span>
          </div>

          {/* China */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <img
                src="https://flagcdn.com/w40/cn.png"
                alt="China"
                className="h-6"
              />
              <span>China</span>
            </div>
            <span className="text-gray-400">→</span>
          </div>

          {/* USA */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="USA"
                className="h-6"
              />
              <span>USA</span>
            </div>
            <span className="text-gray-400">→</span>
          </div>

          {/* UAE */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <img
                src="https://flagcdn.com/w40/ae.png"
                alt="UAE"
                className="h-6"
              />
              <span>UAE</span>
            </div>
            <span className="text-gray-400">→</span>
          </div>

          {/* Mauritius */}
          <div className="flex flex-col items-center gap-2">
            <img
              src="https://flagcdn.com/w40/mu.png"
              alt="Mauritius"
              className="h-6"
            />
            <span>Mauritius</span>
          </div>

        </div>
      </div>
    </section>
  );
}
