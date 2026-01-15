import { useState } from "react";
import peas from "../assets/peas.png";
import corn from "../assets/corn.png";
import mixveg from "../assets/mixveg.png";

const products = [
  { id: 1, name: "Frozen Green Peas", img: peas },
  { id: 2, name: "Frozen Sweet Corn", img: corn },
  { id: 3, name: "Frozen Mix Veg", img: mixveg },
  { id: 4, name: "Frozen Carrot", img: peas },
  { id: 5, name: "Frozen Beans", img: corn },
];

export default function ProductsSection() {
  const [index, setIndex] = useState(0);

  // responsive visible count
  const getVisibleCount = () => {
    if (window.innerWidth < 640) return 1;      // mobile
    if (window.innerWidth < 1024) return 2;     // tablet
    return 3;                                   // desktop
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const total = products.length;

  const next = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  // update visibleCount on resize
  window.onresize = () => {
    setVisibleCount(getVisibleCount());
  };

  const extendedProducts = [...products, ...products];

  return (
    <section className="py-16 sm:py-20 lg:py-24 mb-10 border-t border-b relative overflow-hidden">
      <h2 className="text-center text-xl sm:text-2xl tracking-widest text-green-800 mb-12 sm:mb-16 lg:mb-20">
        PRODUCTS
      </h2>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-10 text-2xl sm:text-3xl text-gray-400 hover:text-green-700 transition"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-10 text-2xl sm:text-3xl text-gray-400 hover:text-green-700 transition"
      >
        ›
      </button>

      {/* SLIDER */}
      <div className="max-w-6xl mx-auto overflow-hidden px-6 sm:px-12 lg:px-20">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCount)}%)`,
          }}
        >
          {extendedProducts.map((item, i) => (
            <div
              key={i}
              className={`flex-shrink-0 text-center px-6`}
              style={{ width: `${100 / visibleCount}%` }}
            >
              {/* IMAGE BOX */}
              <div className="
                bg-[#eeeeee]
                w-[200px] h-[200px]
                sm:w-[220px] sm:h-[220px]
                lg:w-[260px] lg:h-[260px]
                mx-auto
                flex items-center justify-center
              ">
                <img
                  src={item.img}
                  alt={item.name}
                  className="max-h-[140px] sm:max-h-[170px] lg:max-h-[200px] object-contain"
                />
              </div>

              {/* NAME */}
              <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-800">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MORE PRODUCTS BUTTON */}
      <div className="text-center mt-12 sm:mt-16 lg:mt-20">
        <button className="border border-green-700 px-8 sm:px-10 py-3 text-xs sm:text-sm tracking-wide hover:bg-green-700 hover:text-white transition">
          More Products
        </button>
      </div>
    </section>
  );
}
