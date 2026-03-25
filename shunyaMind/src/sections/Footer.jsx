import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="bg-[#E5F4FF] py-14">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-10">
        
        {/* LEFT SECTION */}
        <div>
          <img src={logo} alt="logo" className="h-10 mb-4" />

          <p className="font-medium mb-3">Follow Us on:</p>

          {/* Social Icons */}
          <div className="flex gap-3 mb-4">
            <div className="bg-blue-200 p-2 rounded">
              <i className="fab fa-facebook-f text-blue-600"></i>
            </div>
            <div className="bg-blue-200 p-2 rounded">
              <i className="fab fa-linkedin-in text-blue-600"></i>
            </div>
            <div className="bg-blue-200 p-2 rounded">
              <i className="fab fa-instagram text-blue-600"></i>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            ©2026 Shunyottam Learning Systems Pvt. Ltd. All rights reserved.
          </p>
        </div>

        {/* COLUMN 1 */}
        <div>
          <h3 className="font-semibold mb-4">System Applications</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Students (NEET & JEE)</li>
            <li>Cognition Architect™</li>
            <li>Parent Cognition Program</li>
            <li>Cognition Enablement System™</li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="font-semibold mb-4">System Architecture</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>LFRS</li>
            <li>Transformation</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-700 text-sm mb-6">
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>

          
        </div>

        <div>
           <h3 className="font-semibold mb-2">Talk to an Expert</h3>
          <p className="text-sm text-gray-600">
            Get clarity, insights, and a clear action plan.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;