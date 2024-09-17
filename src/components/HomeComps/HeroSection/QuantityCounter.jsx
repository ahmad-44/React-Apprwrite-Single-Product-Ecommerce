import { useSelector, useDispatch } from "react-redux";
import {
  changeQuantity,
  decrement,
  increment,
} from "../../../reduxStore//quantityCounterSlice";
// import { useDebugValue, useEffect } from "react";

const QuantityCounter = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity.quantity);
  // console.log(useSelector((state) => state.quantity));
  const handleManualInputs = (e) => {
    const input = Number(e.target.value);
    if (input < 1) {
      dispatch(changeQuantity(""));
      return;
    } else if (input > 10) {
      dispatch(changeQuantity(10));
      return;
    }
    dispatch(changeQuantity(input));
  };

  return (
    <div className="flex flex-col items-center justify-center rounded overflow-hidden mt-5">
      <span className="text-lg text-gray-500">Quantity </span>
      <div className="border border-gray-300 mt-1">
        <button
          onClick={() => dispatch(decrement())}
          className="py-2 px-4 bg-gray-300 hover:bg-gray-400 transition duration-200"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          min="1"
          max="10"
          className="w-16 text-center border-0 outline-none"
          onChange={handleManualInputs}
        />
        <button
          onClick={() => dispatch(increment())}
          className="py-2 px-4 bg-gray-300 hover:bg-gray-400 transition duration-200 "
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
