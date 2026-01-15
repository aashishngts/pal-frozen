import strengthImage from "../../assets/palfresh/strength-grid.png";

export default function StrengthGrid() {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <img
          src={strengthImage}
          alt="Pal Fresh Strengths"
          className="w-full max-w-4xl object-contain"
        />
      </div>
    </section>
  );
}
