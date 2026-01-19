import img5 from "../../assets/icons/frozen_logo.png";
export default function PalGroupIntro() {
  return (
    <section className="py-10 text-center bg-white">
      {/* LOGO */}
      <img src={img5} alt="The Frozen Company" className="mx-auto w-70 mb-4" />

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto text-sm text-gray-600 leading-relaxed space-y-6">
        <p>
          Operating with a customer-centric approach, The Frozen Company places
          great emphasis on reliability and timely delivery. The company works
          closely with farmers and suppliers to ensure traceability and
          consistency in raw materials. Each stage of processing is carefully
          monitored to comply with global food safety regulations and
          certifications. By adopting best practices in packaging and storage,
          the company ensures products reach end consumers in optimal condition.
        </p>
      </div>
    </section>
  );
}
