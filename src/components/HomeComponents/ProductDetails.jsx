import ProductImageCarousel from "./ProducImageCarousel.jsx";
function ProductDetails() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <ProductImageCarousel />
      <div className="bg-slate-500 p-20">2</div>
      <div className="bg-slate-500 p-20">3</div>
      <div className="bg-slate-500 p-20">4</div>
    </div>
  );
}

export default ProductDetails;
