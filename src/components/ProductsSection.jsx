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

  const visible = products.slice(index, index + 3);

  return (
    <section className="py-24 mb-10 border-t border-b relative">
      <h2 className="text-center text-2xl tracking-widest text-green-800 mb-20">
        PRODUCTS
      </h2>

      {/* LEFT ARROW (only after scroll) */}
      {index > 0 && (
        <button
          onClick={() => setIndex(index - 1)}
          className="absolute left-16 top-[55%] text-3xl text-gray-500 hover:text-green-700"
        >
          ‹
        </button>
      )}

      {/* RIGHT ARROW */}
      {index + 3 < products.length && (
        <button
          onClick={() => setIndex(index + 1)}
          className="absolute right-16 top-[55%] text-3xl text-gray-500 hover:text-green-700"
        >
          ›
        </button>
      )}

      {/* PRODUCTS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 px-6 text-center">
        {visible.map((item) => (
          <div key={item.id}>
            {/* IMAGE BOX */}
            <div className="bg-[#eeeeee] w-[260px] h-[260px] mx-auto flex items-center justify-center">
              <img
                src={item.img}
                alt={item.name}
                className="max-h-[200px] object-contain"
              />
            </div>

            {/* NAME */}
            <p className="mt-6 text-gray-800">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* MORE PRODUCTS BUTTON */}
      <div className="text-center mt-20">
        <button className="border border-green-700 px-10 py-3 text-sm tracking-wide hover:bg-green-700 hover:text-white transition">
          More Products
        </button>
      </div>
    </section>
  );
}
