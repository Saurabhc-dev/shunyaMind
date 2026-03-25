import Input from "../components/Input";
import contactBg from "../assets/contactbg.png";

function Contact() {
  return (
    <section className="py-20 footer-gradient">
      <div className="max-w-5xl mx-auto px-6 ">
        {/* Heading */}
        <div className="text-center mb-10  ">
          <h2 className="text-3xl font-bold">
            Let's <span className="text-blue-500">Rebuild</span> How Students
            Learn
          </h2>
          <p className="text-gray-600 mt-2 ">
            Book a 20-min Discovery Call or take the Free Friction Check. Your
            information stays fully confidential,
            <br /> and you’ll hear from us within 24 hours.{" "}
            <strong className="text-blue-800">(Institutions only.)</strong>
          </p>
        </div>

        {/* CARD */}
        <div className=" rounded-xl shadow-md overflow-hidden grid md:grid-cols-2 ">
          {/* LEFT INFO */}
          <div
            className="contact_bg_contact rounded-8  p-6"
            style={{
              backgroundImage: `url(${contactBg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              minHeight: "100%",
            }}
          >
            <h3 className="font-semibold mb-4">Contact Information</h3>

            <div className="space-y-4 text-sm text-gray-700">
              <p>
                <strong>Contact:</strong> <br />
                +91 - 7300091470
              </p>

              <p>
                <strong>Email:</strong> <br />
                institutions@shunyamind.com
              </p>

              <p>
                <strong>Office Address:</strong> <br />
                R8, Royal Park, Delhi Arab Road, Near Rajpura Chauraha,
                Udyogpuri, Kota, Rajasthan - 324004
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Full Name *" placeholder="Enter full name" />
              <Input label="Email *" placeholder="Enter your address" />

              <Input label="Institution *" placeholder="Enter institution" />
              <Input label="Designation *" placeholder="Enter designation" />

              <div className="md:col-span-2">
                <Input label="Enter City *" placeholder="Enter city" />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium">
                  Your Message (Optional)
                </label>
                <textarea
                  className="w-full mt-1 p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                  rows="4"
                  placeholder="Write here..."
                />
              </div>
            </div>

            {/* Button */}
            <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition">
              Submit
            </button>

            <p className="text-xs text-gray-500 mt-2 text-center">
              No spam. No sales pitch. Just a focused conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
