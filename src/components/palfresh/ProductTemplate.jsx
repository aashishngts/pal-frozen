function ProductTemplate({ product }) {
  return (
    <>
      {/* ================= INTRO / TITLE (FULL WIDTH BG) ================= */}
      <section className="relative w-full left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[380px] flex items-center justify-center text-center">
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

          {/* TITLE CONTENT */}
          <div className="relative z-10 px-4 sm:px-6">
            <p className="text-base sm:text-xl lg:text-2xl font-medium tracking-tight text-[#3A2315]">
              {product.subtitle}
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#3A2315]">
              {product.title}
            </h2>
          </div>
        </div>
      </section>

      {/* ================= INTRO CONTENT ================= */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative flex items-center justify-center">

              {/* COLOR STRIP */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-48 sm:w-56 lg:w-64 h-full"
                style={{ backgroundColor: product.themeColor }}
              />

              {/* PACK IMAGE */}
              {product.images?.pack && (
                <img
                  src={product.images.pack}
                  alt="Product Package"
                  className="relative z-10 w-[220px] sm:w-[260px] lg:w-[300px] object-contain"
                />
              )}
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex justify-center text-center lg:text-left">
            <div className="max-w-md">
              <p className="font-medium mb-4 text-sm sm:text-base">
                {product.introTitle}
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {product.introText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="pt-16 pb-40 sm:pb-24 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* STORY TEXT */}
          <div className="max-w-lg mx-auto lg:mx-0">
            <p className="text-lg sm:text-xl tracking-widest mb-8 font-semibold text-[#3A2315] text-center lg:text-left">
              STORY OF OUR FROZEN {product.title}
            </p>

            <div className="space-y-6">
              {product.story.map((step, i) => (
                <div key={i}>
                  <p className="text-sm tracking-wider uppercase font-semibold text-gray-900">
                    {step.title}
                  </p>

                  <p className="text-sm font-medium text-gray-700 mt-1">
                    {step.subtitle}
                  </p>

                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {step.text}
                  </p>

                  {i !== product.story.length - 1 && (
                    <div className="text-2xl mt-2 text-gray-500">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CIRCLE + BOWL */}
          <div className="relative flex justify-center">
            <div className="relative">

              {/* CIRCLE */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white shadow-2xl text-center px-4">
                <div>
                  <p className="text-xs tracking-widest mb-3 opacity-90">
                    SKU / RETAIL
                  </p>
                  <p className="text-2xl sm:text-3xl font-light">200GS</p>
                  <p className="text-xl sm:text-2xl font-light">500GS</p>
                  <p className="text-2xl sm:text-3xl font-light">1KG</p>

                  <div className="w-16 h-px bg-white opacity-40 mx-auto my-4" />

                  <p className="text-xs tracking-widest opacity-90">
                    INSTITUTIONAL
                  </p>
                  <p className="text-base sm:text-lg font-light mt-2">
                    5KG · 10KG · 20KG
                  </p>
                </div>
              </div>

              {/* BOWL IMAGE */}
              {product.images?.bowl && (
                <img
                  src={product.images.bowl}
                  alt="Bowl"
                  className="absolute -bottom-20 sm:-bottom-24 left-1/2 -translate-x-1/2 w-[220px] sm:w-[260px] lg:w-[300px] object-contain"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductTemplate;
