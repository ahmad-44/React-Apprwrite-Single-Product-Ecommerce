import { GreenCircle } from "../../../../public/icons/GreenCircle";
import { saleTime } from "../../../constants/content";
function Urgency() {
  return (
    <div>
      <p className="gap-3 flex-grow bg-yellow-100 pl-4 py-2 rounded-full mt-10">
        <GreenCircle className="animate-ping duration-1000 inline" />
        <span>&#160; &#160;Sale: Live for {saleTime} | Limited Stock</span>
      </p>
    </div>
  );
}

export default Urgency;
