import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section className="relative bg-[#eaf2f7] pt-20 overflow-hidden hero-gradient">
      <div className="md:hidden w-full">
        <img
          src={heroImg}
          alt="brain learning"
          className="w-full object-cover"
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-left md:text-left text-4xl sm:text-5xl sm:text-base md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
              Cognition-First™
            </span>
            <br />
            <span className="text-[#0b3c5d]">
              Learning for NEET & <br className="hidden sm:block" /> JEE
              Aspirants
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-600 text-left w-[350px] text-base sm:text-base">
            We don’t push harder, we remove friction. When friction drops,
            attention steadies, memory strengthens, and performance rises.
          </p>

          {/* Buttons */}
         <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
  <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded-md w-full sm:w-auto whitespace-nowrap">
    Take the Free Learning Friction Check
  </button>
  <button className="border border-blue-400 font-bold text-blue-600 z-10 px-6 py-2 rounded-md w-full sm:w-auto whitespace-nowrap">
    Book a Discovery Call
  </button>
</div>

          <p className="mt-4 text-left text-xs sm:text-sm text-gray-500 max-w-md mx-auto md:mx-0">
            If you're a parent or student, this assessment helps you understand
            what's blocking learning — before changing anything else.
          </p>

          {/* Features */}
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-sm text-gray-700 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <p>18 years of NEET/JEE Expertise</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <p>Rooted in Cognitive Science</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <p>Backed by Results</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 w-full">
          <img
            src={heroImg}
            alt="brain learning visual"
            className="hidden md:block
          absolute
          -right-16
          lg:-right-16
          md:-right-36
          top-1/2
          -translate-y-1/2
          w-[800px]
          max-w-none
          pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
