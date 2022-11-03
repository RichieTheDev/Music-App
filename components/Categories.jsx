import React from "react";
import Pic1 from "../assets/Pic1.png";
import Pic2 from "../assets/Pic2.png";
import Pic3 from "../assets/Pic3.png";
import Pic4 from "../assets/Pic4.png";
import Pic5 from "../assets/Pic5.png";
import Pic6 from "../assets/Pic6.png";
import Pic7 from "../assets/Pic7.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Categories = () => {
  return (
    <>
      <div className="md:ml-24 ">
        <p className=" mt-16 text-xl font-bold">New Releases</p>
        <div>
          <Swiper
            slidesPerView={4}
            breakpoints={{
              360: {
                width: 360,
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <img src={Pic1} alt="/" />
              <p className="font-bold">Wetin man go do</p>
              <p>Kwise</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pic2} alt="/" />
              <p className="font-bold">Damages</p>
              <p>Tellz</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pic3} alt="/" />
              <p className="font-bold">SuperStar</p>
              <p>BTunes</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pic4} alt="/" />
              <p className="font-bold">Sounds from me</p>
              <p>Ay Racks</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pic5} alt="/" />
              <p className="font-bold">Money</p>
              <p>Richie</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pic6} alt="/" />
              <p className="font-bold">Fendi</p>
              <p>SouthSide</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pic7} alt="/" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="md:ml-24 ">
        <p className=" mt-4 text-xl font-bold">Songs of the Week</p>
        <div>
          <Swiper
            slidesPerView={4}
            breakpoints={{
              360: {
                width: 360,
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <img src={Pic6} alt="/" />
              <p className="font-bold">Fendi</p>
              <p>SouthSide</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pic2} alt="/" />
              <p className="font-bold">Damages</p>
              <p>Tellz</p> className="font-bold"
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pic4} alt="/" />
              <p className="font-bold">Sounds from me</p>
              <p>Ay Racks</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pic1} alt="/" />
              <p className="font-bold">Wetin man go do</p>
              <p>Kwise</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pic5} alt="/" />
              <p className="font-bold">Money</p>
              <p>Richie</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pic3} alt="/" />
              <p className="font-bold">SuperStar</p>
              <p>BTunes</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pic7} alt="/" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Categories;
