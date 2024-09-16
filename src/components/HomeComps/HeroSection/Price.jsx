/* eslint-disable react/prop-types */
import {
  sellingPrice,
  delPrice,
  currencySymbol,
} from "../../../constants/content";
import { useSelector } from "react-redux";

import { _del_price } from "../../../constants/sectionController";

function Price({
  savings,
  strikeThrough,
  mainPriceClasses,
  delPriceClasses,
  containerClasses,
}) {
  const quantity = useSelector((state) => state.quantity.quantity);

  return (
    <div className={`${containerClasses}`}>
      {_del_price && strikeThrough && (
        <del className={`${delPriceClasses}`}>
          {currencySymbol}.{quantity * delPrice}
        </del>
      )}
      <span className={`${mainPriceClasses}`}>
        {currencySymbol}.{quantity * sellingPrice}
      </span>

      {_del_price && savings && (
        <span className="bg-red-500 px-4 py-2 rounded-md text-cloud font-bold text-center mt-2">
          Saving{" "}
          {(
            100 -
            ((quantity * delPrice) / (quantity * sellingPrice)) * 100
          ).toFixed()}
          %
        </span>
      )}
    </div>
  );
}

export default Price;
