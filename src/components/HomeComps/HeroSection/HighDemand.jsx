import { redFlame } from "../../../constants/images";
import { numberOfPeopleWatching } from "../../../constants/content";
function HighDemand() {
  return (
    <p className=" bg-red-100 pl-4 py-2 rounded-lg">
      <img src={redFlame} alt="flame icon" width={15} className="inline mb-1" />
      &#160;
      <span className="text-red-500 font-bold"> High Demand: </span>
      <span>
        {numberOfPeopleWatching} people are currently looking at this offer!
      </span>
    </p>
  );
}

export default HighDemand;
