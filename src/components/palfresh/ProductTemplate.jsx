function ProductTemplate({ product }) {
  return (
    <>
      {/* ================= INTRO SECTION ================= */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-full mx-auto">
          {/* TITLE TOP WITH BACKGROUND */}
          <div className="text-center mb-20 relative py-16">
            {/* Background Image behind title */}
            {product.images?.bg && (
              <div
                className="absolute inset-0 w-full h-full opacity-90"
                style={{
                  backgroundImage: `url(${product.images.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}

            <div className="relative z-10">
              <p className="text-sm tracking-widest text-gray-500 mb-2">
                {product.subtitle}
              </p>
              <h2 className="text-4xl font-semibold">{product.title}</h2>
            </div>
          </div>

          {/* IMAGE + CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE (BG + PACK + BOWL) */}
            <div className="relative flex justify-center min-h-[400px]">
              {/* PACK + BOWL COMBO */}
              <div className="relative flex justify-center items-center min-h-[420px]">
                {/* HALF COLOR BOX */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-44 h-80"
                  style={{ backgroundColor: product.themeColor }}
                />

                {/* PACK IMAGE (BIGGER) */}
                {product.images?.pack && (
                  <img
                    src={product.images.pack}
                    alt="Product Package"
                    className="relative z-10 w-100 object-contain"
                  />
                )}
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="font-medium mb-4 text-lg">{product.introTitle}</p>
              <p className="text-gray-700 leading-relaxed">
                {product.introText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-24 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-row gap-20 items-center justify-center">
          {/* LEFT STORY */}
          <div>
            <p className="text-xs tracking-widest mb-10 text-gray-800">
              STORY OF OUR FROZEN {product.title}
            </p>

            <div className="space-y-8 relative pl-6 border-l-2 border-gray-300">
              {product.story.map((step, i) => {
                const [title, desc] = step.split(" – ");
                return (
                  <div key={i} className="relative">
                    <div className="absolute -left-[27px] top-2 w-2 h-2 bg-gray-400 rounded-full"></div>
                    <p className="text-xs tracking-wider uppercase font-semibold text-gray-900 mb-1">
                      {title}
                    </p>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE - CIRCULAR BADGE + BOWL */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Circular Badge */}
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white shadow-2xl">
                <div className="text-center">
                  <p className="text-xs tracking-widest mb-3 opacity-90">
                    SKU/RETAIL
                  </p>
                  <p className="text-3xl font-light mb-1">200GS</p>
                  <p className="text-2xl font-light mb-1">500GS</p>
                  <p className="text-3xl font-light">1KG</p>
                  <div className="w-16 h-px bg-white opacity-40 mx-auto my-4"></div>
                  <p className="text-xs tracking-widest opacity-90">
                    INSTITUTIONAL
                  </p>
                  <p className="text-xl font-light mt-2">5KG · 10KG · 20KG</p>
                </div>
              </div>

              {/* Product bowl at bottom */}
              {product.images?.bowl && (
                <img
                  src={product.images.bowl}
                  alt=""
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-80 object-contain"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest mb-8 text-gray-800">
            WHAT WE OFFER
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            {product.offer}
          </p>
        </div>
      </section>

      {/* ================= OTHER PRODUCTS =================
      <section className="py-16 px-4 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest text-center mb-12 text-gray-800">
            OUR OTHER PRODUCTS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {product.otherProducts.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gray-200 rounded"></div>
                </div>
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default ProductTemplate;
