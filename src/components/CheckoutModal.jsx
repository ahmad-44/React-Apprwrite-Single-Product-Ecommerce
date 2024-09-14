/* eslint-disable react/prop-types */
// Modal.jsx

const CheckoutModal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`bg-white w-[90%] md:w-[50%] lg:w-[40%] rounded-lg shadow-lg px-6 py-8 relative z-10 transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <button
          className="absolute top-2 text-2xl  right-2 text-red-500 hover:text-red-700"
          onClick={onClose}
        >
          &times; {/* Cross icon */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default CheckoutModal;
