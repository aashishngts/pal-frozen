import family1 from "../../assets/palfarm/family1.jpeg";
import family2 from "../../assets/palfarm/family2.jpeg";
import family3 from "../../assets/palfarm/family3.jpeg";
import family4 from "../../assets/palfarm/family4.jpeg";
import family5 from "../../assets/palfarm/family5.jpeg";
import family6 from "../../assets/palfarm/family6.jpeg";




export default function PalFarmsFamily() {
  return (
    <section className="bg-white py-28">
      {/* TOP DIVIDER */}
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-gray-300 mb-24"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6">
          
          {/* LEFT IMAGE GRID */}
          <div className="grid grid-cols-3 gap-6">
            <img
              src={family1}
              className="w-full object-cover"
              alt=""
            />
            <img
              src={family2}
              className="w-full object-cover"
              alt=""
            />
            <img
              src={family3}
              className="w-full object-cover"
              alt=""
            />

            <img
              src={family4}
              className="w-full object-cover"
              alt=""
            />
            <img
              src={family5}
              className="w-full object-cover"
              alt=""
            />
            <img
              src={family6}
              className="w-full object-cover"
              alt=""
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-semibold text-green-800 mb-2">
              PAL FARMS
            </h2>

            <p className="text-green-800 mb-8">
              That Feel Like Family
            </p>

            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-lg">
              We work with farmers who share our mindset, people who understand
              that good farming is not rushed and good soil deserves respect.
              Before joining our network, every farm is evaluated for its soil
              health, water source, and local climate. But beyond the technical
              checks, we look for something else: a willingness to farm with
              discipline, transparency, and pride.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
              Once they become part of Pal Farm, farmers don’t work alone. They
              farm with us. Our agronomy team walks their fields, guides them,
              listens to them, and helps them make decisions that protect both
              the crop and the soil for the long term. It’s a relationship built
              on trust, not pressure.
            </p>
          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="border-t border-gray-300 mt-24"></div>
      </div>
    </section>
  );
}
