import { useState } from "react";
import applicationData from "../data/applicationData";
import ApplicationCard from "../components/ApplicationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import leftArrow from "../assets/arrow_left.svg";
import rightArrow from "../assets/arrowright.svg";

function Application() {
  const [cards, setCards] = useState(applicationData);

  const next = () => {
    setCards((prev) => [...prev.slice(1), prev[0]]);
  };

  const prev = () => {
    setCards((prev) => [
      prev[prev.length - 1],
      ...prev.slice(0, prev.length - 1),
    ]);
  };

  return (
    <section className="py-20 bg-[#f7fbff] relative overflow-hidden">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h2 className="text-3xl font-bold">
          How the{" "}
          <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
            System
          </span>{" "}
          is Applied
        </h2>
      </div>

      {/* Arrows */}
      <div className="hidden lg:flex absolute right-20 top-20 gap-2">
        {/* PREV */}
        <button
          onClick={prev}
          className="w-12 h-12 bg-white shadow rounded-lg flex items-center justify-center hover:bg-orange-500 transition"
        >
          <img src={rightArrow} alt="prev" className="w-5 h-5" />
        </button>

        {/* NEXT */}
        <button
          onClick={next}
          className="w-12 h-12 bg-white shadow rounded-lg flex items-center justify-center hover:bg-orange-500 transition"
        >
          <img src={leftArrow} alt="next" className="w-5 h-5" />
        </button>
      </div>

      {/* DESKTOP SLIDER */}
      <div className="hidden lg:flex gap-6 px-6 overflow-hidden">
        {cards.map((item) => (
          <ApplicationCard key={item.title} item={item} />
        ))}
      </div>

      {/* MOBILE */}
      <div className="lg:hidden px-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          watchSlidesProgress={false}
        >
          {cards.map((item, i) => (
            <SwiperSlide key={i}>
              <ApplicationCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Application;
