import harvesting from "../../assets/palfarm/harvesting.jpeg";
export default function Harvesting() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP DIVIDER */}
        <div className="border-t border-gray-300 mb-24"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6">
          
          {/* LEFT IMAGE */}
          <div>
            <img
              src={harvesting}
              alt=""
              className="w-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-semibold text-green-800 mb-2">
              HARVESTING
            </h2>

            <p className="text-green-800 mb-8">
              Never Before, Never After
            </p>

            <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
              Harvest time on Pal Farm is not a routine; it’s a moment of
              precision. A vegetable is harvested only when it’s at the right
              stage of maturity, not early, not late. Before a field is
              harvested, our team checks the colour, size, texture, and health
              of the crop. If something isn’t right, we wait. And if a part of
              the field falls below standards, we reject it without hesitation.
              <br /><br />
              Once approved, the harvest moves quickly. The vegetables are
              collected gently, loaded without delay, and transported
              immediately to our facility. Freshness isn’t something we hope
              for, it’s something we safeguard from the very first minute.
            </p>
          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="border-t border-gray-300 mt-24"></div>
      </div>
    </section>
  );
}
