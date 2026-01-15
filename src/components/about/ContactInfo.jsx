export default function ContactInfo() {
  return (
    <section className="py-32 bg-white text-center">
      {/* HEADING */}
      <h2 className="text-2xl text-green-800 mb-16">
        FOR MORE INFORMATION
      </h2>

      {/* TOP INFO ROW */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-20 mb-20 text-sm text-gray-700">

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
          <p className="underline mt-2">gmae@smpalgroup.com</p>
        </div>

        {/* HOURS */}
        <div>
          <h4 className="font-medium mb-4">Opening Hours</h4>
          <p>Mon - Sat &nbsp;&nbsp; 9:00 am - 6:00 pm</p>
        </div>
      </div>

      {/* MAP */}
      <div className="max-w-5xl mx-auto px-6">
        <img
          src="https://dummyimage.com/900x400/f3f4f6/9ca3af&text=Google+Map"
          alt="Map"
          className="mx-auto"
        />
      </div>
    </section>
  );
}
