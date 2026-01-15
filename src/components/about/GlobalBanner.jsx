import sea from "../../assets/palfreshglobal/sea.jpeg"
export default function GlobalBanner() {
  return (
    <section
      className="relative h-[420px] w-full"
      style={{
        backgroundImage: `url(${sea})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* GREEN DIAGONAL STRIP */}
      <div
        className="absolute bottom-0 left-0 w-full h-[35%] bg-[#0f5f3a] flex items-center px-24"
        style={{
          clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <div className="text-white">
          <p className="text-sm font-semibold">
            A LEGACY EXPANDING GLOBALLY
          </p>
          <p className="text-xs">
            Make in India to Make for the World.
          </p>
        </div>
      </div>
    </section>
  );
}
