
import img5 from "../../assets/smgroup/img5.png"
export default function PalGroupIntro() {
  return (
    <section className="py-10 text-center bg-white">
      {/* LOGO */}
      <img
        src={img5}
        alt="SM Pal Group"
        className="mx-auto mb-4"
      />

      {/* SUB TITLE */}
      <p className="text-sm mb-12">Nurtured Since 1982</p>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto text-sm text-gray-600 leading-relaxed space-y-6">
        <p>
          Headquartered in Haldwani, the SM Pal Group, founded by Mr. Suresh Pal
          (Owner of Pal Group) in 1982, boasts over 42 years of expertise,
          thriving across diverse business verticals including Pal Stone
          Industries, Pal Prateek motors – Pal Ford, Pal Nissan and Pal Skoda
          Dealerships, Pal Colonizers, and Pal Frozen Foods.
        </p>

        <p>
          Mr. Suresh Pal, Mrs. Meera Pal and Mr. Prateek Pal are at the forefront
          of the Pal Group Haldwani, which is today a renowned group known across
          the business fraternity with a global vision. With a focus on a
          transparent and customer-centric approach to business and as
          responsible corporate citizens, Pal Group Haldwani strives to
          demonstrate integrity and clarity in doing business with our clients,
          every step of the way.
        </p>
      </div>

      {/* READ MORE */}
      <div className="mt-12">
        <button className="underline text-sm text-gray-700">
          Read More
        </button>
      </div>

      {/* DIVIDER */}
      <div className="mt-20 w-full border-t border-gray-400" />
    </section>
  );
}
