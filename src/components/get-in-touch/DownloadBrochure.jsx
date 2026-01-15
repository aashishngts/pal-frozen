import pdfIcon from "../../assets/getintouch/pdf.png";

export default function DownloadBrochure() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#f2f2f4] text-center">
      {/* HEADING */}
      <h2
        className="
          text-xl
          sm:text-2xl
          md:text-3xl
          lg:text-4xl
          font-medium
          text-[#3b2a1f]
          mb-10
          sm:mb-14
          md:mb-20
        "
      >
        Download Frozzo Brochure and leaflet
      </h2>

      {/* PDF LIST */}
      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          gap-10
          sm:gap-12
          md:gap-16
        "
      >
        {[1, 2, 3, 4].map((_, i) => (
          <a
            key={i}
            href="/pdf/palfresh-leaflet.pdf"
            download
            className="group flex flex-col items-center"
          >
            <img
              src={pdfIcon}
              alt="PDF"
              className="
                h-16
                sm:h-18
                md:h-20
                mb-3
                transition
                transform
                group-hover:scale-105
              "
            />

            <p
              className="
                text-xs
                sm:text-sm
                text-[#3b2a1f]
                italic
                text-center
              "
            >
              Palfresh Leaflet.pdf
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
