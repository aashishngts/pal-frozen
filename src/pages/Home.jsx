import Hero from "../components/Hero";
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
          In The Frozen Company we grows own vegetables by contract farming to
          maintain the quality and essence of the product. It helps us to have
          products available as per our requirement with assured eminence. We
          get in a pre-agreed price for the raw material from the farmers with
          buy back guarantee to the farmers. The production unit of the company
          is located at Haldwani with automated machines and equipment used for
          cutting, peeling and shedding of the material. Every equipment is PLC
          Control.
        </p>
      </section>

      {/* ================= PRODUCTS ================= */}
      <ProductsSection />

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
          FROM OUR FARMS, TO YOUR FREEZER!
        </h2>

        <p
          className="
          text-gray-600
          leading-relaxed
          text-sm
          sm:text-base
        "
        >
          At The Frozen Company, we believe great taste begins with responsible
          choices. That’s why we partner with trusted farmers who follow
          sustainable practices, ensuring every vegetable is grown with care for
          the soil, water, and environment.
        </p>
      </section>
    </>
  );
}
