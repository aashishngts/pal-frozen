export default function ContactInfo() {
  return (
    <section className="py-10 sm:py-10 lg:py-10 bg-white text-center">
      {/* HEADING */}
      <h2 className="text-xl sm:text-2xl text-green-800 mb-12 sm:mb-16">
        FOR MORE INFORMATION
      </h2>

      {/* TOP INFO ROW */}
      <div
        className="
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
        "
      >
        {/* ADDRESS */}
        <div>
          <h4 className="font-medium mb-4">Office Address</h4>
          <p>
            6/2, NAYTA MUNDLA RAOD NEMAWAR ROAD, INDORE, MADHYA PRADESH - 452020
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-medium mb-4">Contact</h4>
          <p>+91 9879299952</p>
          <p>+91 7879912345</p>
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
            title="Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3681.3157994605963!2d75.91409687530368!3d22.67928497941593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQwJzQ1LjQiTiA3NcKwNTUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1768807084842!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
