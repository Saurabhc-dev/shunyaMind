import { useState } from "react";
import brain1 from "../assets/brain1.webp";
import brain2 from "../assets/brain2.webp";
import brain3 from "../assets/brain3.webp";
import brain4 from "../assets/brain4.webp";
import smImg1 from "../assets/smImg1.png";
import smImg2 from "../assets/smImg2.png";
import smImg3 from "../assets/smImg3.png";
import smImg4 from "../assets/smImg4.png";

import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const data = [
  {
    title: "Distraction",
    desc: "High cognitive load shrinks available attention, making it difficult for students to stay focused even with strong intentions.",
    img: brain1,
    smImg: smImg1,
  },
  {
    title: "Exam Anxiety",
    desc: "Stress narrows cognitive bandwidth, reducing clarity and causing even well-prepared students to underperform.",
    img: brain2,
    smImg: smImg2,
  },
  {
    title: "Memory Slips",
    desc: "When encoding is weak, retention drops. Students forget lessons despite revising, because recall readiness is low.",
    img: brain3,
    smImg: smImg3,
  },
  {
    title: "Inconsistency",
    desc: "Fluctuating cognitive rhythms disrupt output, making performance swing even when motivation and effort remain strong.",
    img: brain4,
    smImg: smImg4,
  },
];

function Friction() {
  const [activeImg, setActiveImg] = useState(brain1);
  const [index, setIndex] = useState(0);

  return (
    <section className="py-10 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">
            What <span className="text-orange-600">Stops</span>{" "}
            <span className="bg-gradient-to-r from-orange-600 to-blue-500 bg-clip-text text-transparent">
              Brilliant Minds
            </span>{" "}
            from Performing?
          </h2>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            {data.slice(0, 2).map((item, i) => (
              <Card key={i} item={item} setActiveImg={setActiveImg} />
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <img
              src={activeImg}
              alt="brain"
              className="w-[280px] lg:w-[350px] transition-all duration-300"
            />
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {data.slice(2).map((item, i) => (
              <Card key={i} item={item} setActiveImg={setActiveImg} />
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            onSlideChange={(swiper) => setIndex(swiper.realIndex)}
            watchSlidesProgress={false}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="text-center">
                  {/* IMAGE */}
                  <img
                    src={item.img}
                    alt="brain"
                    className="w-[300px] mx-auto mb-6"
                  />

                  {/* CARD */}
                  <div className="bg-[#f5eee6] p-5 rounded-xl shadow text-left">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* DOTS (sync with swiper) */}
          <div className="flex justify-center gap-2 mt-4">
            {data.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === index ? "bg-orange-500 scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md">
            See How It Works
          </button>
        </div>
      </div>
    </section>
  );
}

export default Friction;
