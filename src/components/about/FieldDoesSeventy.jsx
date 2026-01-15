import coliflower from "../../assets/palfarm/coliflower.jpeg";
export default function FieldDoesSeventy() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP DIVIDER */}
        <div className="border-t border-gray-300 mb-20"></div>

        {/* HEADING */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-semibold text-green-800 mb-2">
            THE FIELD DOES 70%
          </h2>
          <p className="text-green-800 mb-6">
            We Simply Preserve It
          </p>

          <p className="text-sm text-gray-600 leading-relaxed">
            By the time the vegetables enter our facility, their quality is
            already shaped by months of sunlight, soil, water, and care. Our
            processing simply protects that natural goodness, keeping the
            colour, nutrition, and flavour exactly as the farm gave it to us.
            We freeze freshness, but we don’t manufacture it. The real magic
            happens in the fields.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={coliflower}
            alt=""
            className="w-full max-w-5xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
