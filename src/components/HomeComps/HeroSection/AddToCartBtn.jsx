import { useState } from "react";
import CheckoutModal from "../../CheckoutModal";
import OrderForm from "../../OrderForm";

// eslint-disable-next-line react/prop-types
function AddToCartBtn({ btnText }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="mt-1">
      <button
        className="py-5 md:py-6 px-10 w-full text-2xl bg-purple text-cloud rounded-full font-bold mt-2 hover:bg-opacity-90 transition duration-300"
        onClick={toggleModal}
      >
        {btnText}
      </button>

      <CheckoutModal isOpen={isModalOpen} onClose={toggleModal}>
        <h2 className="text-xl mb-4 font-bold">
          Enter your details to place order
        </h2>
        <OrderForm onClose={toggleModal} />
      </CheckoutModal>
    </div>
  );
}

export default AddToCartBtn;
