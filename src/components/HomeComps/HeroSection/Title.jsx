import { fiverStars } from "../../../constants/images";
import {
  _title_reviews,
  _title_title,
  _title_subheading,
} from "../../../constants/sectionController.js";
import {
  numberOfBuyers,
  productTitle,
  subHeading,
} from "../../../constants/content";
function Title() {
  return (
    <div className="mt-5">
      {_title_reviews && (
        <p className="flex items-center gap-1 flex-wrap">
          <img src={fiverStars} className="h-4 inline" /> {numberOfBuyers}+ ✅
          Verified Customer Reviews
        </p>
      )}
      {_title_title && <h1 className="title mb-2">{productTitle}</h1>}
      {_title_subheading && <h3 className="text-lg">{subHeading}</h3>}
    </div>
  );
}

export default Title;
