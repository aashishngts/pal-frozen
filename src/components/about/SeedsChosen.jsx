import seed from "../../assets/palfarm/seed.jpeg";

export default function SeedsChosen() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl text-green-800 mb-2">
            SEEDS CHOSEN
          </h2>

          <p className="text-sm text-green-800 mb-10">
            With Care, Not Convenience
          </p>

          <p className="text-sm text-gray-600 leading-relaxed max-w-md">
            Every harvest begins with a simple decision: choosing the right
            seed. We pick seeds the way a farmer picks the first fruit of the
            season, with patience, testing, and respect for the process. Only
            high-purity, disease-free seeds are used, and each batch is first
            grown on our own trial farms where we observe how the plant behaves:
            how it grows, how it resists disease, how uniform it stays. Only
            seeds that prove themselves in the field move forward to farmers. If
            a seed doesn’t carry the strength we expect, it never reaches the
            soil. It’s that simple.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={seed}
            alt="Seeds Chosen"
            className="w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
