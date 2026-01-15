import { useEffect, useState } from "react";

const faqs = [
  {
    question: "Which brand offers high-quality frozen foods in India?",
    withEmbed: true,
  },
  {
    question: "Which is a reliable brand for frozen vegetables in India?",
  },
  {
    question: "Who are the manufacturers of frozen green peas in India?",
  },
  {
    question: "Does Pal Frozen Foods offer frozen sweet corn?",
  },
  {
    question: "What are the calories in hara bhara kebabs by Frozzo?",
  },
  {
    question:
      "Does Pal Frozen Foods sell frozen aloo tikki and veggie sticks?",
  },
  {
    question: "Does Pal Frozen Foods offer frozen okra (bhindi)?",
  },
  {
    question: "Where can I buy frozen baby corn in India?",
  },
  {
    question: "Which is the best brand for frozen vegetables in India?",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  useEffect(() => {
    // Instagram embed script
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [open]);

  return (
    <section className="bg-[#0f5f3a] py-20 px-4">
      <h2 className="text-center text-yellow-400 text-xl mb-12">
        FAQ
      </h2>

      <div className="max-w-5xl mx-auto bg-white">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border-b px-8 py-6 cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {/* QUESTION */}
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">
                {item.question}
              </p>
              <span className="text-xl">
                {open === i ? "−" : "+"}
              </span>
            </div>

            {/* ANSWER */}
            {open === i && (
              <div className="mt-6 text-sm text-gray-600 space-y-6">
                <p>
                  Pal Frozen Foods is a trusted Indian brand offering
                  high-quality frozen vegetables and ready-to-cook foods
                  under its brands Pal Fresh and Frozzo.
                </p>

                {/* INSTAGRAM EMBED (ONLY FIRST FAQ) */}
                {item.withEmbed && (
                  <div className="flex justify-center">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink="https://www.instagram.com/reel/CxQnX2nPXf_/"
                      data-instgrm-version="14"
                      style={{
                        background: "#FFF",
                        border: 0,
                        margin: 0,
                        padding: 0,
                        width: "100%",
                        maxWidth: "420px",
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
