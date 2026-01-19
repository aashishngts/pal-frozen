import logo from "../../assets/icons/frozen_logo.png";

export default function AboutSection() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <img
          src={logo}
          alt="Pal Fresh Logo"
          className="mx-auto mb-10 w-40 md:w-80"
        />

        {/* <h2 className="text-xl md:text-2xl font-semibold text-green-800 tracking-wide mb-8">
          FROM OUR FARMS, TO YOUR FREEZER!
        </h2>

        <p className="text-gray-700 text-base md:text-sm leading-relaxed max-w-4xl mx-auto">
          Driven by quality and care, The Frozen Company specializes in
          delivering premium frozen vegetables and fruits that retain their
          natural freshness and nutrition. Each product is carefully processed
          and sealed using high-quality packaging to ensure maximum protection
          and hygiene. Trusted by partners across global markets, the company
          brings farm-fresh produce straight from source to storage with
          uncompromising standards. With a strong cold-chain system in place,
          every delivery promises safety, consistency, and taste. Sailor Exports
          Limited stands where freshness meets reliability in frozen foods.
        </p> */}
        <div className="flex justify-center my-12">
          <div className="w-2/3 h-[1px] bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
