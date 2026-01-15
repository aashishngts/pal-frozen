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
            179/3, Patthar Mundla Rd, Palda Naka, Dinesh Nagar, Palda, Indore,
            Madhya Pradesh 452001
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-medium mb-4">Contact</h4>
          <p>+91 6269699699</p>
          <a
            href="mailto:export@sailorexport.com"
            className="underline mt-2 inline-block hover:text-green-800"
          >
            export@sailorexport.com
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.16303307156!2d75.88729507476036!3d22.684974028843364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcc8c856ed41%3A0x967cc09d943c8f67!2s179%2F3%2C%20Patthar%20Mundla%20Rd%2C%20Palda%20Naka%2C%20Dinesh%20Nagar%2C%20Palda%2C%20Indore%2C%20Madhya%20Pradesh%20452001%2C%20India!5e0!3m2!1sen!2sus!4v1768473586452!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
