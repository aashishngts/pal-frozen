import { useState } from "react";
import { palfreshProducts } from "../../data/palfreshProducts";

export default function OtherProducts() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const total = palfreshProducts.length;

  const next = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  // duplicate list for smooth looping illusion
  const extendedProducts = [...palfreshProducts, ...palfreshProducts];

  return (
    <section className="py-20 px-4 bg-white border-t border-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <p className="text-xs tracking-widest text-center mb-14 text-gray-800">
          OUR OTHER PRODUCTS
        </p>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
        >
          ›
        </button>

        {/* SLIDER */}
        <div className="overflow-hidden px-16">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleCount)}%)`,
            }}
          >
            {extendedProducts.map((product, i) => (
              <div
                key={i}
                className="w-1/3 flex-shrink-0 text-center px-8"
              >
                <div className="mb-6 flex justify-center">
                  {product.images?.pack && (
                    <img
                      src={product.images.pack}
                      alt={product.title}
                      className="w-44 object-contain"
                    />
                  )}
                </div>
                <p className="text-sm text-gray-700">
                  Frozen {product.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-gray-300" />
      </div>
    </section>
  );
}
