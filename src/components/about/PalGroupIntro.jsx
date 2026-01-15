
import img5 from "../../assets/smgroup/sailor_exports_limited.png"
export default function PalGroupIntro() {
  return (
    <section className="py-10 text-center bg-white">
      {/* LOGO */}
      <img
        src={img5}
        alt="Sailor Exports Limited"
        className="mx-auto w-70 mb-4"
      />

      {/* SUB TITLE */}
      <p className="text-sm mb-12">Nurtured Since 1982</p>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto text-sm text-gray-600 leading-relaxed space-y-6">
        <p>
          Sailor Exports Limited is a trusted name in the frozen food industry, known for delivering high-quality products to global markets. The company specializes in sourcing, processing, and exporting frozen food items that meet strict international quality and safety standards. With a strong focus on hygiene and freshness, Sailor Exports Limited follows well-defined cold-chain processes to preserve taste, texture, and nutritional value. Their modern infrastructure and advanced freezing technology help maintain consistent product quality across shipments. This commitment has enabled the company to build long-term relationships with buyers worldwide.
        </p>

        <p>
          Operating with a customer-centric approach, Sailor Exports Limited places great emphasis on reliability and timely delivery. The company works closely with farmers and suppliers to ensure traceability and consistency in raw materials. Each stage of processing is carefully monitored to comply with global food safety regulations and certifications. By adopting best practices in packaging and storage, the company ensures products reach end consumers in optimal condition. 
        </p>
      </div>

      
      {/* DIVIDER */}
      <div className="mt-20 w-full border-t border-gray-400" />
    </section>
  );
}
