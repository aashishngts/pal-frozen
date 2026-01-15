import { useEffect, useState } from "react";
import ProductsSection from "../components/ProductsSection";

/* TEMP PLACEHOLDER IMAGES (abhi same image use ho rahi hai) */
import bg1 from "../assets/bg.png";
import bg2 from "../assets/bg.png";
import bg3 from "../assets/bg.png";
import bg4 from "../assets/bg.png";
import Hero from "../components/Hero";

const heroImages = [bg1, bg2, bg3, bg4];

export default function Home() {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hero />


      {/* ================= ABOUT ================= */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-2xl tracking-widest text-green-800 mb-8">
          PAL FROZEN FOODS
        </h2>

        <p className="text-gray-600 leading-relaxed">
          In 2013, SM Pal Group entered the field of agriculture-based
          processing as Pal Frozen Foods specializing in planning, processing,
          and producing quality vegetables and snacks under brands “Pal Fresh”
          and “Frozzo”. With homegrown supplies and our own frozen plant in
          Haldwani, Uttarakhand and Depots in metro cities like Lucknow,
          Bangalore, Dehradun, Kochi, etc.
        </p>

        <button className="mt-10 underline text-gray-700">Read More</button>
      </section>

      <ProductsSection />

      {/* ================= PURE GOODNESS ================= */}
      <section
        className="relative h-[320px] w-full"
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/852e77_51cf7d86399f4639afed6b241cbe72d3~mv2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* GREEN DIAGONAL OVERLAY */}
        <div
          className="absolute bottom-0 left-0 w-full h-[45%] bg-green-900 flex items-center justify-end px-16"
          style={{
            clipPath: "polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <div className="text-right text-white">
            <h3 className="text-3xl font-semibold">PURE GOODNESS</h3>
            <p className="text-lg mt-1">Sourced From Nature.</p>
          </div>
        </div>
      </section>

      {/* ================= FARMS TEXT ================= */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-xl tracking-widest text-green-800 mb-10">
          FROM OUR FARMS, TO YOUR FREEZER!
        </h2>

        <p className="text-gray-600 leading-relaxed">
          At Pal Frozen Foods, we believe great taste begins with responsible
          choices. That’s why we partner with trusted farmers who follow
          sustainable practices, ensuring every vegetable is grown with care for
          the soil, water, and environment.
        </p>
      </section>
    </>
  );
}
