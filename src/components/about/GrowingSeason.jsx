import growing from "../../assets/palfarm/farmers.jpeg";
export default function GrowingSeason() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto">
        
       

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-semibold text-green-800 mb-2">
              GROWING SEASON
            </h2>

            <p className="text-green-800 mb-8">
              Filled With Care
            </p>

            <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
              From the day the seeds touch the soil, every stage of the crop is
              watched closely. Soil is tested, water is managed carefully, and
              plant health is checked regularly. If a crop needs protection, we
              use only approved methods. If a crop needs rest, we adjust
              irrigation. Nothing is done in excess, and nothing is left to
              chance.
              <br /><br />
              Our field teams visit farms often, sometimes to take measurements,
              sometimes to plan nutrient cycles, and sometimes simply to walk
              through the rows and see how the plants are growing. It’s the kind
              of attention that comes not from rules, but from responsibility.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src={growing}
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
