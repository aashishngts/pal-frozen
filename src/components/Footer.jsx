export default function Footer() {
  return (
    <footer className="bg-[#efeff1] pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm text-gray-700">

        {/* ABOUT */}
        <div>
          <h4 className="text-green-800 text-lg mb-6">About Us</h4>
          <p className="leading-relaxed">
            In 2013, SM Pal Group entered the field of agriculture-based
            processing as Pal Frozen Foods specializing in planning,
            processing, and producing quality vegetables and snacks
            under brands “Pal Fresh” and Frozzo. With homegrown supplies
            and our own frozen plant in Haldwani, Uttarakhand and Depots
            in metro cities like Lucknow, Bangalore, Dehradun, Kochi, etc.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-green-800 text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li>HOME</li>
            <li>About Us</li>
            <li>Frozen Vegetables</li>
            <li>Frozen Snacks</li>
            <li>Careers</li>
            <li>Become a Distributor</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ADDRESS */}
        <div>
          <h4 className="text-green-800 text-lg mb-6">Corporate Address</h4>

          <div className="space-y-4">
            <p className="flex gap-3">
              <span>📍</span>
              <span>
                Palam City, Devalchaur, Opp. Pal Ford,
                Rampur Road, Haldwani - <b>Uttarakhand</b> 263139
              </span>
            </p>

            <p className="flex gap-3">
              <span>📞</span>
              <a href="tel:+919045599277" className="underline">
                +91 9045599277
              </a>
            </p>

            <p className="flex gap-3">
              <span>✉️</span>
              <a
                href="mailto:marketing@smpalgroup.com"
                className="underline"
              >
                marketing@smpalgroup.com
              </a>
            </p>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-green-800 text-lg mb-6">Connect With Us</h4>

          <div className="mb-8">
            <p className="mb-3 font-medium">Pal Fresh</p>
            <div className="flex gap-3 text-xl">
              <span>🌐</span>
              <span>📸</span>
              <span>in</span>
              <span>💬</span>
            </div>
          </div>

          <div>
            <p className="mb-3 font-medium">Frozzo</p>
            <div className="flex gap-3 text-xl">
              <span>🌐</span>
              <span>📸</span>
              <span>in</span>
              <span>💬</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 mt-16 py-6 border-t text-xs text-gray-600 flex justify-between">
        <p>
          © 2023 by Pal Fresh.{" "}
          <span className="underline">Proudly created with Pal Frozen Foods</span>
        </p>
        <a href="#" className="underline">
          Back to Top
        </a>
      </div>
    </footer>
  );
}
