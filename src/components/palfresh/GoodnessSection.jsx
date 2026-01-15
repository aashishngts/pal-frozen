import noColour from "../../assets/palfresh/no-colour.png";
import noPreservatives from "../../assets/palfresh/no-preservatives.png";
import noAdditives from "../../assets/palfresh/no-additives.png";

export default function GoodnessSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Icons */}
        <div className="flex flex-col sm:flex-row gap-10 justify-center">
          <div className="text-center">
            <div className="bg-green-800 p-8 mb-4 flex justify-center">
              <img src={noColour} alt="" className="w-16 h-16" />
            </div>
            <p className="text-gray-800 font-medium">No Colour</p>
          </div>

          <div className="text-center">
            <div className="bg-green-800 p-8 mb-4 flex justify-center">
              <img src={noPreservatives} alt="" className="w-16 h-16" />
            </div>
            <p className="text-gray-800 font-medium">No Preservatives</p>
          </div>

          <div className="text-center">
            <div className="bg-green-800 p-8 mb-4 flex justify-center">
              <img src={noAdditives} alt="" className="w-16 h-16" />
            </div>
            <p className="text-gray-800 font-medium">No Additives</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-green-800 mb-6">
            GOODNESS YOU CAN TRUST
          </h2>

          <p className="text-gray-700 text-base md:text-sm leading-relaxed">
            At Sailor Exports Limited, we deliver frozen vegetables and fruits
            just the way nature intended—fresh, nutritious, and carefully
            preserved. Our products contain no added colours, no preservatives,
            and no unnecessary additives, ensuring pure and natural goodness in
            every bite. Using advanced freezing technology, we lock in taste,
            texture, and essential nutrients from farm to freezer. Every process
            is designed to meet strict quality and safety standards for complete
            peace of mind. With Sailor Exports Limited, you can trust the
            freshness you serve every day.
          </p>
        </div>
      </div>
    </section>
  );
}
