export default function BecomeDistributor() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* ================= BECOME A DISTRIBUTOR ================= */}
        <div className="border border-[#3b2a1a] p-6 sm:p-8 md:p-10 text-center mb-16 sm:mb-20">
          <h2 className="text-sm sm:text-base tracking-widest mb-4 sm:mb-6">
            BECOME A DISTRIBUTOR
          </h2>

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto mb-5 sm:mb-6">
            Partner with a brand that delivers consistent quality, reliable
            supply, and export-grade frozen vegetables. As a Pal Frozen Foods
            distributor, you tap into a growing market with high-demand
            products, strong margins, and full operational support. Scale your
            business with a trusted manufacturer, seamless logistics, and a
            product range that moves fast in retail, HORECA, and wholesale
            segments. Join us and build a distribution network backed by quality
            that speaks for itself.
          </p>

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We are selective about who we partner with because product quality
            means nothing without a strong distribution backbone. If you have
            an established network, the ability to maintain cold-chain
            standards, and the drive to grow in a competitive market, you are
            exactly who we want. This partnership isn’t just about selling
            products — it’s about creating dependable supply chains that meet
            the rising demand for premium frozen vegetables across India.
          </p>
        </div>

        {/* ================= FORM TITLE ================= */}
        <h3 className="text-center text-xs sm:text-sm tracking-widest mb-10 sm:mb-12">
          DISTRIBUTOR ASSESSMENT FORM
        </h3>

        {/* ================= FORM ================= */}
        <form
          className="
            max-w-4xl
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-2
            gap-x-8
            md:gap-x-12
            gap-y-6
            sm:gap-y-8
            text-xs
            sm:text-sm
          "
        >
          {/* INPUT FIELD */}
          {[
            { label: "NAME OF COMPANY/FIRM", placeholder: "Name of Company/Firm" },
            { label: "NAME OF OWNER", placeholder: "Name of Owner" },
            { label: "Email *", placeholder: "Email", type: "email" },
            { label: "Phone", placeholder: "Phone" },
            { label: "Address", placeholder: "Address" },
            { label: "GST NO.", placeholder: "GST No." },
            {
              label: "Company/Trade Name/Shop Name",
              placeholder: "Company / Trade Name",
            },
            {
              label: "Quantity *",
              placeholder: "Enter quantity in KG",
            },
          ].map((field, i) => (
            <div key={i}>
              <label className="block mb-2">{field.label}</label>
              <input
                type={field.type || "text"}
                className="w-full border border-gray-800 px-3 py-2"
                placeholder={field.placeholder}
              />
            </div>
          ))}

          {/* SELECT */}
          <div className="md:col-span-2">
            <label className="block mb-2">
              Choose your Distribution
            </label>
            <select className="w-full border border-gray-800 px-3 py-2">
              <option>Choose your vegetables</option>
              <option>Frozen Green Peas</option>
              <option>Frozen Sweet Corn</option>
              <option>Frozen Mix Veg</option>
              <option>Frozen Snacks</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div className="md:col-span-2">
            <label className="block mb-2">Message</label>
            <textarea
              rows="3"
              className="w-full border border-gray-800 px-3 py-2"
            />
          </div>

          {/* SUBMIT */}
          <div className="md:col-span-2 text-center mt-6 sm:mt-8">
            <button
              type="submit"
              className="
                px-8
                sm:px-10
                py-2
                border
                border-gray-800
                bg-gray-900
                text-white
                text-xs
                sm:text-sm
                hover:bg-black
                transition
              "
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
