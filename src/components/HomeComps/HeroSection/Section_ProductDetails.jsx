import ProductImageCarousel from "./ProducImageCarousel.jsx";
import Purchase from "./Purchase.jsx";
import GuaranteeCard from "./GuaranteeCard.jsx";
import SingleReview from "./SingleReview.jsx";
import {
  _guaranteeCard,
  _singleReview,
} from "../../../constants/sectionController.js";
function Section_ProductDetails() {
  return (
    <div className="grid md:grid-cols-2 gap-2 md:grid-rows-2">
      <ProductImageCarousel />
      <div className="p-2 md:row-span-2">
        <Purchase />
      </div>
      <div className="p-2">
        {_guaranteeCard && <GuaranteeCard />}
        {_singleReview && <SingleReview />}
      </div>
    </div>
  );
}

export default Section_ProductDetails;

{
  /* <div className="grid md:grid-cols-2 gap-4">
  <ProductImageCarousel />
  <div className="p-2">
    <Purchase />
  </div>
  <div className="bg-slate-500 p-20 ">3</div>
  <div className="bg-slate-500 p-20">4</div>
</div>; */
}
