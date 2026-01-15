import smLogo from "../../assets/getintouch/smlogo.png";
import palfreshLogo from "../../assets/getintouch/palfresh.png";

export default function VisitOtherSites() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white text-center">
      {/* HEADING */}
      <h2
        className="
          text-xl
          sm:text-2xl
          tracking-widest
          text-[#3b2a1f]
          mb-12
          sm:mb-16
          md:mb-20
        "
      >
        VISIT OUR OTHER SITES
      </h2>

      {/* CARDS */}
      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
          md:gap-16
          lg:gap-20
        "
      >
        {/* CARD 1 */}
        <div
          className="
            bg-[#efeff1]
            px-6
            sm:px-8
            md:px-10
            py-10
            sm:py-12
            md:py-14
            flex
            flex-col
            items-center
          "
        >
          <img
            src={smLogo}
            alt="Sailor Exports Limited"
            className="h-16 sm:h-18 md:h-20 mb-6 object-contain"
          />

          <p
            className="
              text-sm
              sm:text-base
              text-gray-700
              leading-relaxed
              text-center
              mb-8
              sm:mb-10
            "
          >
            As a company, Sailor Exports Limited dedicates all its hard work and passion
            to delivering to its customers the best. This has won the company
            unparalleled trust & confidence of its customers in the Kumaon
            Region.
          </p>

          <button
            className="
              bg-green-800
              text-white
              text-sm
              px-8
              py-2
              hover:bg-green-900
              transition
            "
          >
            More Info
          </button>
        </div>

        {/* CARD 2 */}
        <div
          className="
            bg-[#efeff1]
            px-6
            sm:px-8
            md:px-10
            py-10
            sm:py-12
            md:py-14
            flex
            flex-col
            items-center
          "
        >
          <img
            src={palfreshLogo}
            alt="Pal Fresh"
            className="h-16 sm:h-18 md:h-20 mb-6 object-contain"
          />

          <p
            className="
              text-sm
              sm:text-base
              text-gray-700
              leading-relaxed
              text-center
              mb-8
              sm:mb-10
            "
          >
            PalFresh Global Trading LLC is a trusted name in Frozen Foods Brands
            in UAE, offering premium-quality frozen vegetables. Based in the
            UAE, we serve both households and the HORECA sector.
          </p>

          <button
            className="
              bg-green-800
              text-white
              text-sm
              px-8
              py-2
              hover:bg-green-900
              transition
            "
          >
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}
