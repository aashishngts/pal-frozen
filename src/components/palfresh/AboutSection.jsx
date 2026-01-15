import logo from "../../assets/palfresh/logo.png";

export default function AboutSection() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        <img
          src={logo}
          alt="Pal Fresh Logo"
          className="mx-auto mb-10 w-40 md:w-45"
        />

        <h2 className="text-xl md:text-2xl font-semibold text-green-800 tracking-wide mb-8">
          FROM OUR FARMS, TO YOUR FREEZER!
        </h2>

        <p className="text-gray-700 text-base md:text-sm leading-relaxed max-w-4xl mx-auto">
          Established in 2013, Pal Fresh is specialized in offering top-notch frozen
          vegetables and fruits, meticulously packed in high-quality seals to ensure
          they remain pristine and protected from the outside environment. Trusted by
          consumers and partners worldwide, Pal Fresh is your gateway to exceptional
          frozen foods, bringing farm-fresh goodness right to your home. Experience
          the difference with Pal Fresh, where quality meets convenience.
        </p>
<div className="flex justify-center my-12">
  <div className="w-2/3 h-[1px] bg-gray-300"></div>
</div>

      </div>
    </section>
  );
}
