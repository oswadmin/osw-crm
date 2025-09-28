'use client';
//React/Next Imports
import { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';

//Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

//OWS Imports
import SvgGoogleText from './SvgGoogleText';
import { ButtonStandard } from './ButtonStandard';
import { getPlaceDetails, PlaceDetails } from '@/lib/google-places';
import GoogleReviewCard from './GoogleReviewCard';
import SvgGoogleLogo from './SvgGoogleLogo';
import { randomUUID } from 'crypto';


interface GoogleReviewsProps {
  placeId: string;
}

export default function GoogleReviews({ placeId }: GoogleReviewsProps) {
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getPlaceDetails(placeId);
        setPlaceDetails(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };


    fetchDetails();
  }, [placeId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!placeDetails) return <div>No details found</div>;

  return (
    <>
      <div className='flex desktop:hidden flex-1 bg-white shadow-2xl border-y-gray_light mx-16 px-4 py-2 rounded-2xl space-x-4'>
        <div className="flex w-10">
          <SvgGoogleLogo />
        </div>
        <div className="flex flex-col align-top">
          <p className="text-xl font-bold ">Excellent</p>
          <div className='flex flex-row items-end align-items-center mb-1'>
            <StarRatings
              rating={placeDetails.rating}
              starRatedColor="orange"
              starDimension='20px'
              starSpacing='0px'
              numberOfStars={placeDetails.rating}
              name='rating'
            />
            <span className="font-bold text-xl leading-none ml-1">{placeDetails.rating}.0</span>
          </div>
          <p className='text-sm'>Read our&nbsp;
            <a className="underline" href="https://search.google.com/local/reviews?placeid=ChIJQ7ge5FCdNKMRdhLJTP6maks" target="_blank" rel="noopener noreferrer">
              {placeDetails.userRatingCount} reviews
            </a>
          </p>
        </div>
      </div>



      <div className='hidden desktop:flex flex-1 bg-white shadow-2xl border-y-gray_light mx-16 px-4 py-2 rounded-2xl space-x-4'>
        {/* <p>{placeDetails.formatted_address}</p> */}
        <div className="flex flex-col align-top">
          <p className="text-xl font-bold ">Excellent</p>
          <div className='flex flex-row items-end align-items-center'>
            <StarRatings
              rating={placeDetails.rating}
              starRatedColor="orange"
              starDimension='20px'
              starSpacing='0px'
              numberOfStars={placeDetails.rating}
              name='rating'
            />
            <span className="font-bold text-xl leading-none ml-1">{placeDetails.rating}.0</span>
          </div>
        </div>
        <div className="flex flex-col w-48 pt-1">
          <div className="w-20">
            <SvgGoogleText />
          </div>
          <p>Read our&nbsp;
            <a className="underline" href="https://search.google.com/local/reviews?placeid=ChIJQ7ge5FCdNKMRdhLJTP6maks" target="_blank" rel="noopener noreferrer">
              {placeDetails.userRatingCount} reviews
            </a>
          </p>
        </div>
        <div className="flex flex-1 justify-end">
          <ButtonStandard strURL="https://search.google.com/local/reviews?placeid=ChIJQ7ge5FCdNKMRdhLJTP6maks" className="bg-linear-to-b from-orange_light to-orange hover:bg-orange w-full desktop:w-48 h-[50px] text-xl">
            Write a review
          </ButtonStandard>
        </div>
      </div>

      <div className=''>

        <Swiper
          autoHeight={true}
          // cssMode={true}
          slidesPerView={1}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >


          {placeDetails.reviews.map((review, index) => (
            <>
              <SwiperSlide key={`GoogleReview_${index}`} >
                <GoogleReviewCard key={`GoogleReview_1.${index}`} review={review} />

              </SwiperSlide>
              {/*  */}
            </>
          ))}


          {/* <SwiperSlide>Slide Last</SwiperSlide> */}
        </Swiper>


        {/* <ReviewCarousel initialReviews={placeDetails.reviews} placeID={placeId} /> */}



      </div>

    </>
  );
}