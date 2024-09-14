import Title from "./Title";
import Urgency from "./Urgency";
import {
  _shortDescription,
  _urgency,
  _keyFeatures,
  _buyCard,
} from "../../../constants/sectionController";
import ShortDescription from "./ShortDescription";
import KeyFeatures from "./KeyFeatures";
import BuyCard from "./BuyCard";
function Purchase() {
  return (
    <div>
      <Title />
      {_urgency && <Urgency />}
      {_shortDescription && <ShortDescription />}
      {_keyFeatures && <KeyFeatures />}
      {_buyCard && <BuyCard />}
    </div>
  );
}

export default Purchase;
