import { useState } from "react";
import CheckoutModal from "../../CheckoutModal";

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
        <h2 className="text-xl mb-4">Modal Title</h2>
        <p>This is the content of the modal.</p>
        <button
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
          onClick={toggleModal}
        >
          Close
        </button>
      </CheckoutModal>
    </div>
  );
}

export default AddToCartBtn;
