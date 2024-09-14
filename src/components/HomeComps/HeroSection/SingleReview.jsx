import { fiverStars, reviewPerson, verified } from "../../../constants/images";
import { singleReview } from "../../../constants/content";
function SingleReview() {
  return (
    <div className="mt-8">
      <h3 className="secondTitle">{singleReview.title}</h3>
      <img src={fiverStars} width={110} className="mt-2 left-0" />
      <p className="mt-2 text-base">{singleReview.desc}</p>

      {/* Buyer details */}
      <div className="flex mt-4 gap-4 items-center">
        <img src={reviewPerson} className="rounded-full w-14 h-14" />
        <div>
          <p className="font-bold">~ {singleReview.author} </p>
          <p className="flex items-center gap-1">
            <img src={verified} className="inline" />{" "}
            <span className="text-green-600">Verified Buyer</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleReview;
