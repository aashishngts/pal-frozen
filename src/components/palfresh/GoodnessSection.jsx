import noColour from "../../assets/palfresh/no-colour.png";
import noPreservatives from "../../assets/palfresh/no-preservatives.png";
import noAdditives from "../../assets/palfresh/no-additives.png";

export default function GoodnessSection() {
  return (
    <section className="py-24 px-4 bg-white">
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
          <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-6">
            GOODNESS YOU CAN TRUST
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At Pal Frozen Foods, we bring you vegetables just the way nature
            intended – fresh, nutritious, and untouched by unnecessary
            chemicals. Our products contain no added colours, no preservatives,
            and no additives, ensuring that every bite is packed with natural
            goodness. With advanced freezing technology, we lock in the taste,
            texture, and nutrients so you can enjoy farm-fresh quality with
            complete peace of mind.
          </p>
        </div>

      </div>
    </section>
  );
}
