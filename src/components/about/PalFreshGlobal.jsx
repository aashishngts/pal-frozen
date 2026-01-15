import palfresh from "../../assets/palfreshglobal/palfresh.jpeg"

export default function PalFreshGlobal() {
  return (
    <section className="py-32 text-center bg-white">
      {/* LOGO */}
      <img
        src={palfresh}
        alt="Pal Fresh"
        className="mx-auto mb-6"
      />

      {/* SUB TEXT */}
      <p className="text-xs mb-12">A SM Pal Group Venture</p>

      {/* TITLE */}
      <h2 className="text-2xl text-green-800 mb-16">
        PALFRESH GLOBAL TRADING LLC
      </h2>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto text-sm text-gray-600 leading-relaxed space-y-6">
        <p>
          Founded in 2013, Pal Frozen Foods represents SM Pal Group’s strategic
          expansion into the agriculture-based food processing sector. With a
          clear focus on quality and innovation, we have established ourselves
          as a trusted name in the frozen food industry, serving both domestic
          and international markets.
        </p>

        <p>
          Our business is based in Haldwani, Uttarakhand, where we run a
          state-of-the-art, fully integrated frozen food factory. Supported by
          our own agricultural resources, we maintain full control over the
          supply chain from raw vegetables to finished frozen food products.
          With strategically located depots in major cities of India like
          Lucknow and Dehradun, we supply our products throughout India.
        </p>

        <p>
          We are also strengthening our presence in international markets
          through exports since a few years now in the Middle East, North
          America & Asia where demand for high-quality Indian frozen foods
          continues to grow. And now, with the establishment of our
          international office in Dubai, we are all set to make the world taste
          the freshness of India with our PalFresh frozen vegetables which are
          made with love and served with care.
        </p>
      </div>

      {/* READ MORE */}
      <div className="mt-12">
        <button className="underline text-sm text-gray-700">
          Read More
        </button>
      </div>

      {/* DIVIDER */}
      <div className="mt-20 w-full border-t border-gray-400" />
    </section>
  );
}
