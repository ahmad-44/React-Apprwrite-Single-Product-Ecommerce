import HighDemand from "./HighDemand";
import {
  _highDemand,
  _warranty,
  _freeShipping,
  _inStock,
} from "../../../constants/sectionController";
import AddToCartBtn from "./AddToCartBtn";
import { cartButtonText } from "../../../constants/content";
import { wattantyPeriod } from "../../../constants/content";

function BuyCard() {
  return (
    <div className="mt-5 bg-white rounded-lg p-6 shadow-dark hover:shadow-lg transition-shadow duration-300">
      {_highDemand && <HighDemand />}
      <p className="text-xs text-center mt-5">
        {_warranty && `${wattantyPeriod} Extended Warranty`}
        {_freeShipping && " | Free Shipping"}
      </p>
      <AddToCartBtn btnText={cartButtonText} />
      {_inStock && (
        <p className="text-center mt-2 text-sm">
          <span className="text-green-600 font-bold ">In Stock:</span> Delivers
          in 3-6 Days
        </p>
      )}
    </div>
  );
}

export default BuyCard;
