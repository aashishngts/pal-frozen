export default function ContactInfo() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white text-center">
      {/* HEADING */}
      <h2 className="text-xl sm:text-2xl text-green-800 mb-12 sm:mb-16">
        FOR MORE INFORMATION
      </h2>

      {/* TOP INFO ROW */}
      <div className="
        max-w-6xl
        mx-auto
        px-4
        sm:px-6
        grid
        grid-cols-1
        md:grid-cols-3
        gap-12
        md:gap-20
        mb-16
        text-sm
        text-gray-700
      ">
        {/* ADDRESS */}
        <div>
          <h4 className="font-medium mb-4">
            International Office Address
          </h4>
          <p>PalFresh Global Trading LLC</p>
          <p>Address - M - 22, Bin Shabib Mall,</p>
          <p>Baghdad street, Al Qusaise, Dubai, UAE</p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-medium mb-4">Contact</h4>
          <p>+971 50 573 8300 | +971 50 453 5039</p>
          <a
            href="mailto:gmae@smpalgroup.com"
            className="underline mt-2 inline-block hover:text-green-800"
          >
            gmae@smpalgroup.com
          </a>
        </div>

        {/* HOURS */}
        <div>
          <h4 className="font-medium mb-4">Opening Hours</h4>
          <p>Mon - Sat &nbsp; 9:00 am - 6:00 pm</p>
        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative w-full h-[250px] sm:h-[320px] lg:h-[400px] rounded-lg overflow-hidden shadow">
          <iframe
            title="PalFresh Global Trading LLC Location"
            src="https://www.google.com/maps?q=Bin+Shabib+Mall+Al+Qusais+Dubai&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
