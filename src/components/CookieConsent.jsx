import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

        {/* TEXT */}
        <p className="text-sm text-gray-700 leading-relaxed">
          We use cookies on our website to see how you interact with it. By
          accepting, you agree to our use of such cookies.{" "}
          <a
            href="/privacy-policy"
            className="underline text-gray-900 hover:text-green-700"
          >
            Privacy Policy
          </a>
        </p>

        {/* ACTIONS */}
        <div className="flex items-center gap-5 shrink-0">
          <button className="text-sm underline text-gray-700 hover:text-green-700">
            Settings
          </button>

          <button
            onClick={declineCookies}
            className="
              border
              border-gray-900
              px-4
              py-1.5
              text-sm
              hover:bg-gray-900
              hover:text-white
              transition
            "
          >
            Decline All
          </button>

          <button
            onClick={acceptCookies}
            className="
              bg-black
              text-white
              px-5
              py-1.5
              text-sm
              hover:bg-gray-800
              transition
            "
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
