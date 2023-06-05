import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        freeMode={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg"
            className="ml-96   mt-8"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2015/11/19/20/17/cookies-1051884_640.jpg"
            className="ml-96 mt-8"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2020/05/11/15/06/food-5158702_640.jpg"
            className="ml-96 mt-8"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2020/02/29/15/20/cake-4890393_640.jpg"
            className="ml-96 mt-8"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2017/05/04/21/23/cupcakes-2285209_640.jpg"
            className="ml-96 mt-8"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2014/07/21/23/00/orange-cake-398966_640.jpg"
            className="ml-96 mt-8"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg"
            className="ml-96   mt-8"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2015/11/19/20/17/cookies-1051884_640.jpg"
            className="ml-96 mt-8"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2020/05/11/15/06/food-5158702_640.jpg"
            className="ml-96 mt-8"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2020/02/29/15/20/cake-4890393_640.jpg"
            className="ml-96 mt-8"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2017/05/04/21/23/cupcakes-2285209_640.jpg"
            className="ml-96 mt-8"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2014/07/21/23/00/orange-cake-398966_640.jpg"
            className="ml-96 mt-8"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
