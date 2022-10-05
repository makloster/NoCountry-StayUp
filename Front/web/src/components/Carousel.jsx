import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Carousel = () => {
  function createSlide(img) {
    return (
      <SwiperSlide>
        <img
          className="img w-full max-h-[500px] min-h-[500px]"
          src={`./assets/slider/${img}.png`}
          alt=""
        />
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      loop={true}
      className=" w-full max-h-[500px] min-h-[500px]"
    >
      {createSlide(1)}
      {createSlide(2)}
      {createSlide(3)}
      {createSlide(4)}
      {createSlide(5)}
    </Swiper>
  );
};

export default Carousel;
