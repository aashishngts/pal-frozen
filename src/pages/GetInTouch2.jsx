import { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function GetInTouch2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Allow only digits & max 10
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyu7TaQnKaqqmgqZriwNF8TIcEeeMppkTolO-BUKSUIDg2A3k_sKva80cRiYGQz1X_W/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Auto hide success message
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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

            <div className="space-y-4 text-sm text-gray-700">
              <p>
                <span className="font-medium">Director:</span> Roshan Vidhani
              </p>
              <p>
                <span className="font-medium">Phone:</span> +91 9879299952
              </p>
              <p>
                <span className="font-medium">Director:</span> Sunny Nagrani
              </p>
              <p>
                <span className="font-medium">Phone:</span> +91 7879912345
              </p>

              <p>
                <span className="font-medium">Office Address:</span>
                <br />
                6/2, NAYTA MUNDLA RAOD NEMAWAR ROAD,
                <br />
                INDORE, MADHYA PRADESH – 452020
              </p>

              <p>
                <span className="font-medium">Email:</span> sales@tfcfrozen.com
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                marketing@sailorexports.com
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-gray-50 p-8 sm:p-10">
            {/* SUCCESS / ERROR MESSAGE */}
            {success && (
              <div className="mb-6 border border-green-600 bg-green-50 text-green-700 px-4 py-3 text-sm">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}

            {error && (
              <div className="mb-6 border border-red-600 bg-red-50 text-red-700 px-4 py-3 text-sm">
                ❌ {error}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs tracking-widest mb-2 text-gray-700">
                  FULL NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-sm focus:outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest mb-2 text-gray-700">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-sm focus:outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest mb-2 text-gray-700">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-sm focus:outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest mb-2 text-gray-700">
                  MESSAGE
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-sm resize-none focus:outline-none focus:border-green-700"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="border border-green-700 px-10 py-3 text-xs tracking-widest hover:bg-green-700 hover:text-white transition disabled:opacity-60"
                >
                  {loading ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
