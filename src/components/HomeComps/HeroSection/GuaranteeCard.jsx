import { guarantee } from "../../../constants/images";
import { brandName, wattantyPeriod } from "../../../constants/content";
function GuaranteeCard() {
  return (
    <div className="bg-yellow-100 gap-4 py-4 px-6 rounded-md flex flex-col md:flex-row justify-center items-center">
      <img src={guarantee} width={106} />
      <div>
        <h3 className="secondTitle text-center md:text-left">
          {wattantyPeriod} Money Back Guarantee
        </h3>
        <p className="mt-3 text-bas text-center md:text-left">
          We want you to be 100% satisfied with everything you buy from{" "}
          {brandName}. If you are not entirely happy with your purchase, we will
          refund your money or exchange the product. All we ask us that you
          contact our customer service.
        </p>
      </div>
    </div>
  );
}

export default GuaranteeCard;
