import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function GetInTouch2() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm tracking-widest text-green-700 mb-4">
              GET IN TOUCH
            </p>

            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              We’d love to hear from you
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
              Whether you have a question about our products, distribution,
              partnerships, or anything else, our team is ready to assist you.
            </p>

            {/* CONTACT DETAILS */}
            <div className="space-y-4 text-sm text-gray-700">
              {/* DIRECTOR INFO */}
              <p>
                <span className="font-medium">Director:</span> Roshan Vidhani
              </p>
              <p>
                <span className="font-medium">Phone:</span> +91 98792 99952
              </p>

              <p>
                <span className="font-medium">Office Address:</span>
                <br />
                179/3, Patthar Mundla Rd,
                <br />
                Palda Naka, Dinesh Nagar,
                <br />
                Palda, Indore, Madhya Pradesh – 452001
              </p>

              <p>
                <span className="font-medium">Email:</span> Sales@tfcfrozen.com
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-gray-50 p-8 sm:p-10">
            <form className="space-y-6">
              <div>
                <label className="block text-xs tracking-widest mb-2 text-gray-700">
                  FULL NAME
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-sm focus:outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest mb-2 text-gray-700">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-sm focus:outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest mb-2 text-gray-700">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  placeholder="+91"
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-sm focus:outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest mb-2 text-gray-700">
                  MESSAGE
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-sm resize-none focus:outline-none focus:border-green-700"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="border border-green-700 px-10 py-3 text-xs tracking-widest hover:bg-green-700 hover:text-white transition"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
