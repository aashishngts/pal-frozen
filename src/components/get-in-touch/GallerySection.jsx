import { useState } from "react";

/* ===== TEMP IMAGES (replace later) ===== */
import img1 from "../../assets/getintouch/gallerysection/1.png";
import img2 from "../../assets/getintouch/gallerysection/2.jpeg";
import img3 from "../../assets/getintouch/gallerysection/3.jpeg";
import img4 from "../../assets/getintouch/gallerysection/4.png";
import img5 from "../../assets/getintouch/gallerysection/5.jpeg";
import img6 from "../../assets/getintouch/gallerysection/6.png";
import img7 from "../../assets/getintouch/gallerysection/7.jpeg";
import img8 from "../../assets/getintouch/gallerysection/8.png";
import img9 from "../../assets/getintouch/gallerysection/9.jpeg";

const exhibitionsData = [
  {
    title: "EXHIBITIONS",
    subtitle:
      "Glimpses of our participation in the food exhibitions at Aahar 2022, Indus Food 2023, and World Food India 2023 and 2024.",
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
  },
  {
    title: "ANNUAL SALES MEET 2023",
    subtitle: "",
    images: [img2, img3, img4, img5, img1],
  },
  {
    title: "CELEBRATION OF 10 YEARS OF EXCELLENCE",
    subtitle: "",
    images: [img3, img4, img5, img1, img2],
  },
];

export default function GallerySection() {
  return (
    <section className="py-24 space-y-32">
      {exhibitionsData.map((section, idx) => (
        <GalleryBlock key={idx} section={section} />
      ))}
    </section>
  );
}

function GalleryBlock({ section }) {
  const [active, setActive] = useState(0);

  const next = () =>
    setActive((prev) => (prev + 1) % section.images.length);

  const prev = () =>
    setActive(
      (prev) =>
        (prev - 1 + section.images.length) % section.images.length
    );

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* TITLE */}
      <h2 className="text-center text-xl sm:text-2xl font-semibold mb-3">
        {section.title}
      </h2>

      {section.subtitle && (
        <p className="text-center text-xs sm:text-sm text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto">
          {section.subtitle}
        </p>
      )}

      {/* MAIN IMAGE */}
      <div className="relative overflow-hidden">
        <img
          key={active}
          src={section.images[active]}
          alt=""
          className="
            w-full
            h-[220px]
            sm:h-[300px]
            md:h-[380px]
            lg:h-[450px]
            object-cover
            transition-all
            duration-500
            ease-in-out
            opacity-100
          "
        />

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-3xl
            text-white
            bg-black/40
            hover:bg-black/70
            w-10
            h-10
            flex
            items-center
            justify-center
            transition
          "
        >
          ›
        </button>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-3xl
            text-white
            bg-black/40
            hover:bg-black/70
            w-10
            h-10
            flex
            items-center
            justify-center
            transition
          "
        >
          ‹
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="mt-5 flex gap-3 overflow-x-auto scrollbar-hide">
        {section.images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setActive(i)}
            className={`
              h-16
              sm:h-20
              w-24
              sm:w-32
              object-cover
              cursor-pointer
              border-2
              transition
              duration-300
              ${
                active === i
                  ? "border-green-700 scale-105"
                  : "border-transparent opacity-70 hover:opacity-100"
              }
            `}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
