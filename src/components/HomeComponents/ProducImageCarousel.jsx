import { productImages } from "../../constants/content";

const { productImage1, productImage2, productImage3 } = productImages;
function ProducImageCarousel() {
  let currentIndex = 0;

  function scrollCarousel(direction) {
    const carousel = document.getElementById("carousel");
    const totalSlides = carousel.children.length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto p-4 md:p-10 z-0;">
        {/* Carousel wrapper */}
        <div className="overflow-hidden relative rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out transform"
            id="carousel"
          >
            {/* Slide 1 */}
            <div className="min-w-full">
              <img
                src={productImage1}
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Slide 2 */}
            <div className="min-w-full">
              <img
                src={productImage2}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Slide 3 */}
            <div className="min-w-full">
              <img
                src={productImage3}
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
          onClick={() => scrollCarousel(-1)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
          onClick={() => scrollCarousel(1)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}

export default ProducImageCarousel;
