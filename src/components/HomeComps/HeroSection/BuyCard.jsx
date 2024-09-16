import HighDemand from "./HighDemand";
import {
  _highDemand,
  _warranty,
  _freeShipping,
  _inStock,
  _selling_price,
} from "../../../constants/sectionController";
import AddToCartBtn from "./AddToCartBtn";
import { cartButtonText } from "../../../constants/content";
import { wattantyPeriod } from "../../../constants/content";
import { deliveryDays } from "../../../constants/content";

import Price from "./Price";
import QuantityCounter from "./QuantityCounter";

function BuyCard() {
  return (
    <div className="mt-5 bg-white rounded-lg p-6 shadow-dark hover:shadow-lg transition-shadow duration-300">
      {/* PRICES */}
      {_selling_price && (
        <Price
          savings={true}
          strikeThrough={true}
          containerClasses={
            "flex items-center justify-center space-x-3 md:space-x-5 w-full flex-wrap"
          }
          delPriceClasses={"text-2xl md:text-3xl font-bold text-slate-400"}
          mainPriceClasses={"text-3xl font-bold text-purple"}
        />
      )}

      {/* QUANTITY COUNTER */}
      <QuantityCounter />

      {/* HIGH DEMAND URGENCY */}
      {_highDemand && <HighDemand />}

      <p className="text-xs text-center mt-5">
        {_warranty && `${wattantyPeriod} Extended Warranty`}
        {_freeShipping && " | Free Shipping"}
      </p>
      {/* ADD TO CART BUTTON */}
      <AddToCartBtn btnText={cartButtonText} />
      {_inStock && (
        <p className="text-center mt-2 text-sm">
          <span className="text-green-600 font-bold ">In Stock:</span> Delivers
          in {deliveryDays} Days
        </p>
      )}
    </div>
  );
}

export default BuyCard;
