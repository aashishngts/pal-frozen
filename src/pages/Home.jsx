import Hero from "../components/Hero";
import OtherProducts from "../components/palfresh/OtherProducts";
import ProductsSection from "../components/ProductsSection";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= ABOUT ================= */}
      <section className="py-16 sm:py-20 lg:py-24 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h2
          className="
          text-xl
          sm:text-2xl
          tracking-widest
          text-green-800
          mb-6
          sm:mb-8
        "
        >
          THE FROZEN COMPANY
        </h2>

        <p
          className="
          text-gray-600
          leading-relaxed
          text-sm
          sm:text-base
        "
        >
          At The Frozen Company, we cultivate our vegetables through trusted contract farming to ensure uncompromised quality and authentic freshness. With assured sourcing at pre-agreed prices and a buy-back guarantee for farmers, we create a sustainable farm-to-factory ecosystem
        </p>
      </section>

      {/* ================= PRODUCTS ================= */}
      <OtherProducts/>

      {/* ================= PURE GOODNESS ================= */}
      <section
        className=" relative w-full min-h-[260px] sm:min-h-[300px] lg:min-h-[320px] flex items-end"
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/852e77_51cf7d86399f4639afed6b241cbe72d3~mv2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* GREEN OVERLAY */}
        <div
          className="
      w-full
      bg-green-900
      px-6
      sm:px-10
      lg:px-16
      py-6
      sm:py-8
      text-right
      text-white
    "
          style={{
            clipPath:
              window.innerWidth >= 640
                ? "polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)"
                : "none",
          }}
        >
          <h3
            className="
        text-lg
        sm:text-2xl
        lg:text-3xl
        font-semibold
        leading-tight
      "
          >
            PURE GOODNESS
          </h3>

          <p
            className="
        text-sm
        sm:text-base
        lg:text-lg
        mt-1
        leading-snug
      "
          >
            Sourced From Nature.
          </p>
        </div>
      </section>

      {/* ================= FARMS TEXT ================= */}
      <section
        className="
        py-16
        sm:py-20
        lg:py-24
        max-w-5xl
        mx-auto
        px-4
        sm:px-6
        text-center
      "
      >
        <h2
          className="
          text-lg
          sm:text-xl
          tracking-widest
          text-green-800
          mb-6
          sm:mb-10
        "
        >
          Harvested at Peak Frozen to Perfection
        </h2>

        <p
          className="
          text-gray-600
          leading-relaxed
          text-sm
          sm:text-base
        "
        >
          To ensure uncompromised quality authentic freshness through trusted contract farming to ensure uncompromised quality and authentic freshness. With assured sourcing at pre-agreed prices and a buy-back guarantee for farmers, we create a sustainable farm-to-factory ecosystem
        </p>
      </section>
    </>
  );
}
