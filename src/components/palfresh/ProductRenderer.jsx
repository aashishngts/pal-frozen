import { palfreshProducts } from "../../data/palfreshProducts";
import OtherProducts from "./OtherProducts";
import ProductTemplate from "./ProductTemplate";

export default function ProductRenderer() {
  return (
    <>
      {palfreshProducts.map((product) => (
        <ProductTemplate
          key={product.slug}
          product={product}
        />
      ))}

      <OtherProducts/>
    </>
  );
}
