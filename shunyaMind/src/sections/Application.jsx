import { useState } from "react";
import applicationData from "../data/applicationData";
import ApplicationCard from "../components/ApplicationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import leftArrow from "../assets/arrow_left.svg";
import rightArrow from "../assets/arrowright.svg";

function Application() {
  const [cards, setCards] = useState(applicationData);
  const [index, setIndex] = useState(0);

 const next = () => {
  setIndex((prev) => (prev + 1) % cards.length);
};

const prev = () => {
  setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
};

  return (
    <section className="py-20 bg-[#f7fbff] relative overflow-hidden">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h2 className="text-3xl font-bold">
          How the{" "}
          <span className="bg-gradient-to-r from-orange-600 to-blue-500 bg-clip-text text-transparent">
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
          className="w-12 h-12 bg-white shadow rounded-lg flex items-center justify-center hover:bg-orange-600 transition"
        >
          <img
            src={rightArrow}
            alt="prev"
            width="20"
            height="20"
            className="w-5 h-5"
          />{" "}
        </button>

        {/* NEXT */}
        <button
          onClick={next}
          className="w-12 h-12 bg-white shadow rounded-lg flex items-center justify-center hover:bg-orange-600 transition"
        >
          <img
            src={leftArrow}
            alt="next"
            className="w-5 h-5"
            width="20"
            height="20"
          />
        </button>
      </div>

      {/* DESKTOP SLIDER */}
      <div className="hidden lg:flex gap-6 px-6 overflow-hidden relative">
        <div className="hidden md:block absolute left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="hidden md:block absolute right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
        {cards.map((item, i) => {
  const position = (i - index + cards.length) % cards.length;

  return (
    <ApplicationCard key={item.title} item={cards[position]} />
  );
})}
      </div>

      {/* MOBILE */}
      <div className="lg:hidden px-4">
        <Swiper
  spaceBetween={20}
  slidesPerView={1}
  loop={true}
  watchSlidesProgress={false}
  speed={500}
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
