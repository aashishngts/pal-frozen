function ProductTemplate({ product }) {
  return (
    <>
      {/* ================= INTRO SECTION ================= */}
      <section className="py-10 px-3 bg-white">
        <div className="max-w-full mx-auto">
          {/* TITLE TOP WITH BACKGROUND */}
          <div className=" text-center relative min-h-105 sm:min-h-100 lg:min-h-120 flex items-center justify-center ">
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
              <p className="text-2xl font-medium  tracking-tight text-[#3A2315]">
                {product.subtitle}
              </p>
              <h2 className="text-7xl text-[#3A2315]">{product.title}</h2>
            </div>
          </div>

          {/* IMAGE + CONTENT */}
          <div className="px-5 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            {/* LEFT SIDE (BG + PACK + BOWL) */}
            <div className="relative flex justify-center min-h-100">
              {/* PACK + BOWL COMBO */}
              <div className="relative flex justify-center items-center min-h-105">
                {/* HALF COLOR BOX */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-full"
                  style={{ backgroundColor: product.themeColor }}
                />

                {/* PACK IMAGE (BIGGER) */}
                {product.images?.pack && (
                  <img
                    src={product.images.pack}
                    alt="Product Package"
                    className="relative z-10 object-contain w-100"
                  />
                )}
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex justify-center lg:justify-center">
              <div className="max-w-md">
                <p className="font-medium mb-4 text-md">{product.introTitle}</p>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {product.introText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-10 px-4 bg-gray-100 min-h-[800px]">
        <div className="max-w-6xl mx-auto flex flex-row gap-[120px] items-center justify-center">
          {/* LEFT STORY */}
          <div className="max-w-md">
            <p className="text-xl tracking-widest mb-10 font-semibold text-[#3A2315] ">
              STORY OF OUR FROZEN {product.title}
            </p>

            <div className="space-y-2 ">
              {product.story.map((step, i) => (
                <div key={i} className="relative">
                  {/* STEP TITLE */}
                  <p className="text-md tracking-wider uppercase font-semibold text-gray-900">
                    {step.title}
                  </p>

                  {/* STEP SUBTITLE */}
                  <p className="text-sm font-medium text-gray-700 mt-1">
                    {step.subtitle}
                  </p>

                  {/* STEP DESCRIPTION */}
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {step.text}
                  </p>

                  {/* ARROW */}
                  {i !== product.story.length - 1 && (
                    <div className="mt-2 ml-1 text-gray-600 text-3xl">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white shadow-2xl">
                <div className="text-center">
                  <p className="text-xs tracking-widest mb-3 opacity-90">
                    SKU / RETAIL
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

              {product.images?.bowl && (
                <img
                  src={product.images.bowl}
                  alt=""
                  className="absolute -bottom-30 left-1/2 -translate-x-1/2  w-[320px] object-contain"
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
