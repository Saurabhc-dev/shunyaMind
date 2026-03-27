import { useState } from "react";
import img1 from "../assets/system1.png";
import img2 from "../assets/system2.png";
import img3 from "../assets/system3.png";
import section4 from "../assets/section4.png"
import section4Mobile from "../assets/section4mobile.png"
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
            <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">Friction</span> into{" "}
            <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">Flow</span>
          </h4>
          <p className="text-gray-600 mt-2 text-xs md:text-lg">
            We reduce learning friction and create conditions where students naturally enter a state of clarity, stability, and optimal learning
          </p>
        </div>

        {/*  DESKTOP */}
        <div className="hidden md:grid grid-cols-2 gap-10 items-center">
          <div className="hidden md:block absolute left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="hidden md:block absolute right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* LEFT ACCORDION */}
          <div className="space-y-4">
            

            {data.map((item, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className="border-b pb-4 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold text-xl">
                    {item.title}
                  </h5>
                  <span>{active === i ? "−" : "+"}</span>
                </div>

                {active === i && (
                  <p className="text-sm text-gray-600 mt-2 ">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img src={data[active].img} className="w-[500px]" />
          </div>
        </div>

        {/*  MOBILE SLIDER */}
      <div className="md:hidden text-center">
  
  <Swiper
    modules={[Pagination]}
    spaceBetween={20}
    slidesPerView={1}
    loop={true}
    onSlideChange={(swiper) => setActive(swiper.realIndex)}
    // pagination={{ clickable: true}}
  >
    {data.map((item, i) => (
      <SwiperSlide key={i}>
        
        {/* IMAGE */}
        <img
          src={item.img}
          className="w-[250px] mx-auto mb-6"
        />

        {/* TEXT */}
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
    alt="Description"
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