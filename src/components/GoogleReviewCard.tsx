import { PlaceReview } from "@/lib/google-places";
import StarRatings from "react-star-ratings";
import SvgGoogleLogo from "./SvgGoogleLogo";

interface GoogleReviewCardProps {
  review: PlaceReview
}


export default function GoogleReviewCard({ review }: GoogleReviewCardProps) {

  return (
    <div className="bg-white rounded-3xl shadow-2xl m-16 p-2 desktop:p-6 flex flex-col justify-between"  >
      <div>
        <div className="hidden items-center mb-4 desktop:flex">
          <StarRatings
            rating={review.rating}
            starRatedColor="orange"
            starDimension='20px'
            starSpacing='0px'
            numberOfStars={review.rating}
            name='rating'
          />
        </div>
        <div className="flex desktop:hidden mb-4">
          <div className="flex w-11 ">
            <div className="rounded-full bg-orange text-white h-11 w-11 flex items-center justify-center">
              {review.authorAttribution.displayName.charAt(0).toUpperCase()}
            </div>

          </div>
          <div className="flex flex-col ml-4">
            <p>{review?.authorAttribution?.displayName?.split(" ")[0] ?? ""}</p>
            <p>{review.relativePublishTimeDescription}</p>
          </div>
        </div>



        <div className="text-lg mb-4">
          {review.text.text}
        </div>

        <div className="flex flex-row">
          <div className="flex flex-1 items-center mb-4 desktop:hidden">
            <StarRatings
              rating={review.rating}
              starRatedColor="orange"
              starDimension='20px'
              starSpacing='0px'
              numberOfStars={review.rating}
              name='rating'
            />
          </div>
          <div className="hidden w-11 flex-none desktop:flex">
            <div className="rounded-full bg-orange text-white h-11 w-11 flex items-center justify-center">
              {review.authorAttribution.displayName.charAt(0).toUpperCase()}
            </div>

          </div>
          <div className="hidden flex-1 flex-col ml-4 desktop:flex">
            <p>{review.authorAttribution.displayName.split(" ")[0]}</p>
            <p>{review.relativePublishTimeDescription}</p>
          </div>

          <div className="w-6 desktop:w-11"><SvgGoogleLogo /></div>

        </div>

      </div>
    </div>
  );
};


