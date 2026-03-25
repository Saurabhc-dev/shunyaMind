import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
    >
      {" "}
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-10" />

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-8 text-gray-700 font-medium">
          <li>System Architecture</li>
          <li>LFRS</li>
          <li>System Applications</li>
          <li>Transformation</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="xl:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        >
          ☰
        </div>
      </div>
      {/* 🔥 FULL SCREEN MOBILE MENU */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <img src={logo} alt="logo" className="h-10" />
            <button className="text-2xl" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col text-gray-700">
            {[
              "Home",
              "System Architecture",
              "LFRS",
              "System Applications",
              "Transformation",
              "FAQs",
              "Contact Us",
            ].map((item, index) => (
              <div
                key={index}
                className="px-6 py-4 border-b flex justify-between items-center"
              >
                <span>{item}</span>

                {/* Dropdown arrow only for System Applications */}
                {item === "System Applications" && <span>⌄</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
