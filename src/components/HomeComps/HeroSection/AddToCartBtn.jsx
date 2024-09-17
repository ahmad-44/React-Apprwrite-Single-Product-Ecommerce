import { useState } from "react";
import CheckoutModal from "../../CheckoutModal";
import OrderForm from "../../OrderForm";
import { cartButtonText } from "../../../constants/content";

function AddToCartBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);

  const toggleOrderLoading = () => {
    (prev) => setOrderLoading(!prev);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="mt-1">
      <button
        className="py-4 md:py-5 lg:py-6  px-10 w-full text-2xl bg-purple text-cloud rounded-full font-bold mt-2 hover:bg-opacity-90 transition duration-300"
        onClick={toggleModal}
        disabled={orderLoading}
      >
        {orderLoading ? "Loading..." : cartButtonText}
      </button>

      <CheckoutModal isOpen={isModalOpen} onClose={toggleModal}>
        <h2 className="text-xl mb-4 font-bold">
          Enter your details to place order
        </h2>
        <OrderForm
          onClose={toggleModal}
          toggleOrderLoading={toggleOrderLoading}
        />
      </CheckoutModal>
    </div>
  );
}

export default AddToCartBtn;
