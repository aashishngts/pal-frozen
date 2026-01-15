import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductsSection from "../components/ProductsSection";



export default function Home() {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE (future use / safe keep) */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
          PAL FROZEN FOODS
        </h2>

        <p
          className="
          text-gray-600
          leading-relaxed
          text-sm
          sm:text-base
        "
        >
          In 2013, SM Pal Group entered the field of agriculture-based
          processing as Pal Frozen Foods specializing in planning, processing,
          and producing quality vegetables and snacks under brands “Pal Fresh”
          and “Frozzo”. With homegrown supplies and our own frozen plant in
          Haldwani, Uttarakhand and Depots in metro cities like Lucknow,
          Bangalore, Dehradun, Kochi, etc.
        </p>

        <button
          className="
          mt-8
          sm:mt-10
          underline
          text-sm
          text-gray-700
          hover:text-green-800
          transition
        "
        >
          Read More
        </button>
      </section>

      {/* ================= PRODUCTS ================= */}
      <ProductsSection />

      {/* ================= PURE GOODNESS ================= */}
      <section
        className="
    relative
    w-full
    min-h-[260px]
    sm:min-h-[300px]
    lg:min-h-[320px]
    flex
    items-end
  "
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
          At Pal Frozen Foods, we believe great taste begins with responsible
          choices. That’s why we partner with trusted farmers who follow
          sustainable practices, ensuring every vegetable is grown with care for
          the soil, water, and environment.
        </p>
      </section>
    </>
  );
}
