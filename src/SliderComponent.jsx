import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

// Import your images
import static1 from "./assets/static1.jpg";
import static2 from "./assets/static2.jpg";
import static3 from "./assets/static3.jpg";
import product1 from "./assets/keraShampoo.jpg";
import product2 from "./assets/keraSmooth.jpg";

const SliderComponent = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* First Slider - Static Image with Fade Effect */}
      <div className="w-full md:w-1/3">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          effect="fade"
          modules={[EffectFade, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src={static1}
                alt="Static Image 1"
                className="object-cover w-full h-full"
              />
              <button className="absolute bottom-10 left-10 lg:bottom-40 lg:left-40 bg-transparent hover:bg-white text-white hover:text-black py-2 px-4 md:py-4 md:px-8 border border-white hover:border-transparent">
                Explore
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={static2}
                alt="Static Image 2"
                className="object-cover w-full h-full"
              />
              <button className="absolute bottom-10 left-10 lg:bottom-40 lg:left-40 bg-transparent hover:bg-white text-white hover:text-black py-2 px-4 md:py-4 md:px-8 border border-white hover:border-transparent">
                Explore
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={static3}
                alt="Static Image 3"
                className="object-cover w-full h-full"
              />
              <button className="absolute bottom-10 left-10 lg:bottom-40 lg:left-40 bg-transparent hover:bg-white text-white hover:text-black py-2 px-4 md:py-4 md:px-8 border border-white hover:border-transparent">
                Explore
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Second Slider - Product Images with Text */}
      <div className="w-full md:w-2/3 flex items-center">
        <Swiper
          spaceBetween={50}
          loop={true}
          slidesPerView={1}
          modules={[Autoplay]}
          className="h-full"
        //   autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="grid grid-cols-2 h-full relative">
              <div className="text-3xl product-name sm:text-4xl lg:text-5xl ms-8 sm:ms-8  xl:text-[3.7rem] mt-5 text-[#866c3f] transform -rotate-0 sm:-rotate-90 signika-negative-font absolute top-1/2 left-6 lg:left-12 transform -translate-y-1/2">
                <span className="text-3xl sm:text-4xl lg:text-5xl ms-8 sm:ms-8 xl:text-[3.7rem]  text-black">→</span>
                <span className="font-bold">KERA</span>
                <span className="font-light">SMOOTH</span>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={product1}
                  alt="Product Image 1"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 h-full relative">
              <div className="text-3xl product-name sm:text-4xl lg:text-5xl ms-8 sm:ms-8 xl:text-[3.7rem] mt-5 text-[#866c3f] transform -rotate-0 sm:-rotate-90 signika-negative-font absolute top-1/2 left-7 lg:left-12 transform -translate-y-1/2">
                <span className="text-3xl sm:text-4xl lg:text-5xl ms-8 sm:ms-8 xl:text-[3.7rem] mt-5 text-black">→</span>
                <span className="font-bold">KERA</span>
                <span className="font-light">SMOOTH</span>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={product2}
                  alt="Product Image 2"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 h-full relative">
              <div className="text-3xl product-name sm:text-4xl lg:text-5xl ms-8 sm:ms-8 xl:text-[3.7rem] mt-5 text-[#866c3f] transform -rotate-0 sm:-rotate-90 signika-negative-font absolute top-1/2 left-7 lg:left-12 transform -translate-y-1/2">
                <span className="text-3xl sm:text-4xl lg:text-5xl ms-8 sm:ms-8 xl:text-[3.7rem] mt-5 text-black">→</span>
                <span className="font-bold">KERA</span>
                <span className="font-light">SMOOTH</span>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={product2}
                  alt="Product Image 2"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderComponent;
