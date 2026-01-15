export default function ContactPersons() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white text-center">
      {/* HEADING */}
      <h2
        className="
          text-xl
          sm:text-2xl
          md:text-3xl
          lg:text-4xl
          font-medium
          text-[#3b2a1f]
          mb-12
          sm:mb-16
          md:mb-20
        "
      >
        Get in Touch for Further information
      </h2>

      {/* TABLE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div
          className="
            hidden
            sm:grid
            grid-cols-3
            gap-6
            md:gap-10
            text-sm
            font-semibold
            mb-8
          "
        >
          <p>Name</p>
          <p>Designation</p>
          <p>Contact no.</p>
        </div>

        {/* ROW 1 */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-2
            sm:gap-6
            md:gap-10
            text-sm
            mb-6
            border-b
            sm:border-none
            pb-4
            sm:pb-0
          "
        >
          <p className="font-medium sm:font-normal">
            Kailash Bisht
          </p>
          <p className="text-gray-700">
            Sales Manager
          </p>
          <p className="text-gray-700">
            +91 9520890048
          </p>
        </div>

        {/* ROW 2 */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-2
            sm:gap-6
            md:gap-10
            text-sm
          "
        >
          <p className="font-medium sm:font-normal">
            Arun Mishra
          </p>
          <p className="text-gray-700">
            Marketing Manager
          </p>
          <p className="text-gray-700">
            +91 90455 99277
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6">
        <div className="h-[2px] bg-black" />
      </div>
    </section>
  );
}
