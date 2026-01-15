import { useEffect, useState } from "react";

/* TEMP PLACEHOLDER IMAGES */
import bg1 from "../assets/bg.png";
import bg2 from "../assets/bg.png";
import bg3 from "../assets/bg.png";
import bg4 from "../assets/bg.png";

const heroImages = [bg1, bg2, bg3, bg4];

export default function Hero({
  title = "Serving the freshness",
  subtitle = "From our farms, to your freezer!",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* SLIDING BACKGROUND */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="min-w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* WHITE OVERLAY */}
      <div className="absolute inset-0 bg-white/70" />

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl font-semibold text-green-800 mb-4">
            {title}
          </h1>
          <p className="uppercase tracking-wide text-gray-700">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
