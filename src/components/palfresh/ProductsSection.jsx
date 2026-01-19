import cauliflower from "../../assets/palfresh/packets/cAULIFLOWER.png";
import beans from "../../assets/palfresh/packets/Green Peas.png";
import broccoli from "../../assets/palfresh/packets/Broccoli.png";
import soya from "../../assets/palfresh/packets/Lady FInger.png";
import corn from "../../assets/palfresh/packets/Sweet Corn.png";

const products = [
  { img: cauliflower, name: "Frozen Cauliflower" },
  { img: beans, name: "Frozen Green Beans" },
  { img: broccoli, name: "Frozen Broccoli" },
  { img: soya, name: "Frozen Lady Fingers" },
  { img: corn, name: "Frozen Sweet Corn" },
];

export default function ProductsSection() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
          OUR FROZEN VEGETABLES
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Indulge in nature&apos;s reward with our year-round freshness of frozen
          vegetables, your key to sustainability and freshness.
        </p>

        <div className="w-24 h-px bg-gray-400 mx-auto mb-6"></div>

        <p className="text-lg mb-14">
          <span className="text-orange-600 font-medium">Harvested at Peak,</span>{" "}
          <span className="text-green-700 font-medium">Frozen to Perfection</span>
        </p>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((item, i) => (
            <div key={i} className="bg-white p-6 shadow-sm">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-contain mb-4"
              />
              <p className="text-gray-800 font-sm">
                {item.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
