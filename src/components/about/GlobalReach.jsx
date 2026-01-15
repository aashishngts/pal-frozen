import map from "../../assets/palfreshglobal/globe.png"

export default function GlobalReach() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* MAP */}
        <div className="flex justify-center">
          <img
            src={map}
            alt="Global Reach"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="text-sm font-semibold mb-6">
            WE SPREAD AROUND THE WORLD
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-10">
            We believe freshness has no boundaries. From our base in Dubai,
            we have grown into a trusted global supplier, delivering premium
            frozen vegetables to wholesalers, retailers, hotels, and
            distributors worldwide. With every shipment, we carry our promise
            of purity, quality, and care — spreading natural goodness and
            healthy choices around the world.
          </p>

          {/* STATS */}
          <div className="flex gap-6">
            <div className="bg-gray-100 px-6 py-4 text-center">
              <p className="text-xl font-semibold">10+</p>
              <p className="text-xs text-gray-600">Years of experience</p>
            </div>

            <div className="bg-gray-100 px-6 py-4 text-center">
              <p className="text-xl font-semibold">40+</p>
              <p className="text-xs text-gray-600">Products</p>
            </div>

            <div className="bg-gray-100 px-6 py-4 text-center">
              <p className="text-xl font-semibold">200+</p>
              <p className="text-xs text-gray-600">Workforce</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
