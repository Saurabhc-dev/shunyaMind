import { useState } from "react";
import img1 from "../assets/system1.webp";
import img2 from "../assets/system2.webp";
import img3 from "../assets/system3.webp";
import section4 from "../assets/section4.webp";
import section4Mobile from "../assets/section4mobile.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    title: "Learning Friction Reduction System™",
    desc: "Our system diagnoses and resolves hidden learning barriers—cognitive overload, emotional noise, belief resistance, unstable habits, and external pressure. By removing friction at the source, learning becomes smoother, retention stabilizes, and study feels easier and steadier—allowing learning to flow to capacity.",
    img: img1,
  },
  {
    title: "Alpha Learner Activation Protocol™",
    desc: "We activate the mind's optimal learning state through a short, guided cognitive shift that stabilizes attention, quietens mental noise, and aligns internal rhythm. Students move from effort-driven study into a calm, controlled learning mode. Concepts feel clearer, recall strengthens, resistance drops—improving learning quality without pressure.",
    img: img2,
  },
  {
    title: "Alpha Learner Loop™",
    desc: "The Loop makes progress predictable—even during heavy syllabus phases. Students move through cycles of understanding, retention, and application with increasing ease. Each loop builds cognitive stability, reduces overwhelm, and sustains long-term progress—creating a reliable pace of growth without burnout or irregular learning patterns.",
    img: img3,
  },
];

function System() {
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="py-20 bg-[#f7fbff]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h4 className="text-2xl md:text-4xl font-bold">
              How We Turn{" "}
              <span className="bg-gradient-to-r from-orange-600 to-blue-500 bg-clip-text text-transparent">
                Friction
              </span>{" "}
              into{" "}
              <span className="bg-gradient-to-r from-orange-600 to-blue-500 bg-clip-text text-transparent">
                Flow
              </span>
            </h4>
            <p className="text-gray-600 mt-2 text-xs md:text-lg">
              We reduce learning friction and create conditions where students
              naturally enter a state of clarity, stability, and optimal
              learning
            </p>
          </div>

          {/*  DESKTOP */}
          <div className="hidden md:grid grid-cols-2 gap-10 items-center ">
            

            {/* LEFT ACCORDION */}
            <div className="space-y-4">
              {data.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className="border-b pb-4 cursor-pointer min-h-[60px]"
                >
                  <div className="flex justify-between items-center">
                    <h5 className="font-semibold text-xl">{item.title}</h5>
                    <span>{active === i ? "−" : "+"}</span>
                  </div>

                  {active === i && (
                    <p className="text-sm text-gray-600 mt-2 ">{item.desc}</p>
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src={data[active].img}
                width="500"
                height="400"
                className="w-[500px] h-auto"
                alt="active"
              />
            </div>
          </div>

          {/*  MOBILE SLIDER */}
          <div className="md:hidden text-center">
           <Swiper
  modules={[Pagination]}
  spaceBetween={20}
  slidesPerView={1}
  loop={true}
  watchSlidesProgress={false}
>
  {data.map((item, i) => (
    <SwiperSlide key={i} className="will-change-transform">
      <img
        src={item.img}
        loading="lazy"
        width="250"
        height="200"
        className="w-[250px] mx-auto mb-6"
        alt="active2"
      />

      <div className="px-4">
        <h3 className="font-semibold text-lg text-left">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2 text-left">
          {item.desc}
        </p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
          </div>
        </div>
      </section>
      <section className="w-full">
        <img
          src={section4Mobile}
          alt="section4Mobile"
          loading="lazy"
          width="1200"
          height="600"
          className="block md:hidden w-full h-auto"
        />
        <img
          src={section4}
          alt="Description"
          className="hidden md:block w-full h-auto"
        />
      </section>
    </>
  );
}

export default System;
