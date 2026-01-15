import img1 from "../../assets/smgroup/img1.png"
import img2 from "../../assets/smgroup/img2.png"
import img3 from "../../assets/smgroup/img3.png"
import img4 from "../../assets/smgroup/img4.png"


export default function BusinessVerticals() {
  return (
    <section className="bg-[#0f5f3a] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 text-center">

        {/* CARD 1 */}
        <div className="bg-white px-6 py-10">
          <img
            src={img1}
            className="mx-auto mb-6"
          />
          <p className="text-sm text-gray-600 leading-relaxed">
            Established in 1982, Pal Stone Industries was the company’s first
            venture dedicated to supplying stones and grits.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white px-6 py-10">
          <img
            src={img2}
            className="mx-auto mb-6"
          />
          <p className="text-sm text-gray-600 leading-relaxed">
            Pal Colonizers is at the forefront of transformative real estate
            development in the Haldwani region of Uttarakhand.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white px-6 py-10">
          <img
            src={img3}
            className="mx-auto mb-6"
          />
          <p className="text-sm text-gray-600 leading-relaxed">
            Diversification continued for Sailor Exports Limited in the automobile
            dealership group started Pal Ford, Pal Nissan and Pal Skoda.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-white px-6 py-10">
          <img
            src={img4}
            className="mx-auto mb-6"
          />
          <p className="text-sm text-gray-600 leading-relaxed">
            Specializing in the processing of high-quality vegetables and
            snacks, we operate under the brands Pal Fresh and Frozzo.
          </p>
        </div>

      </div>
    </section>
  );
}
