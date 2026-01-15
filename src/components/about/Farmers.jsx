import farmer from "../../assets/palfarm/farmers.jpeg";
export default function Farmers() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP DIVIDER */}
        <div className="border-t border-gray-300 mb-24"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-semibold text-green-800 mb-2">
              FARMERS
            </h2>

            <p className="text-green-800 mb-8">
              Who Grows With Us, Season After Season
            </p>

            <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
              Our farmers don’t just supply crops; they grow with us. They
              receive stable pricing, fair procurement, and continuous support.
              In return, we get honesty, consistency, and produce that reflects
              the dignity of their work. Every pack of Pal Fresh vegetables
              carries the effort of the farmer who nurtured the crop and the
              team that stood with them through the season.
              <br /><br />
              This relationship creates something rare in today’s food world, a
              supply chain built not just on contracts, but on commitment.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src={farmer}
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="border-t border-gray-300 mt-24"></div>
      </div>
    </section>
  );
}
