import banner from "../../assets/palfarm/banner.jpeg";

export default function FarmsBanner() {
  return (
    <section
      className="relative w-full h-[420px]"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* GREEN DIAGONAL STRIP */}
      <div
        className="absolute bottom-0 left-0 w-full h-[35%] bg-[#0f5f3a] flex items-center justify-end px-24"
        style={{
          clipPath: "polygon(0 100%, 100% 40%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="text-right text-white">
          <h3 className="text-2xl font-semibold mb-1">WHERE RAW EARTH</h3>
          <p className="text-sm">Becomes Real Potential.</p>
        </div>
      </div>
    </section>
  );
}
