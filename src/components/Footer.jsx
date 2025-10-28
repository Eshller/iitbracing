import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="border-0 h-[2px] bg-gradient-to-r from-[#9D17A2] to-[#3A093C] opacity-80 rounded-full" />
      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Left: About Racing Team */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Racing Team IIT Bombay</h3>
              <p className="text-white/80 leading-relaxed text-base md:text-lg">
                IIT Bombay Racing is India's premier Formula Student Electric team with a vision to Revolutionize Electric Mobility in India.
              </p>
            </div>

            {/* Center: Logo/Image */}
            <div className="flex justify-center items-center">
              <img 
                src="/new/footer.png" 
                alt="IIT Bombay Racing Logo" 
                className="w-40 md:w-48 h-auto object-contain opacity-80"
              />
            </div>

            {/* Right: Contact Us */}
            <div className="flex flex-col items-center md:items-start  md:text-right">
              <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold text-lg md:text-xl px-10 py-3 md:py-4 rounded-full mb-6 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us
              </button>
              <ol className="space-y-2 text-white text-base md:text-lg list-disc text-start">
                <li>tech@iitbombayracing.org</li>
                <li>+91 7875692712</li>
                <li>+91 9930779212</li>
                <li>IIT Bombay, Powai, 400076, India</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Developed By Eshway */}
        <div className="bg-[#d86dfc] px-4 py-3">
          <p className="text-center font-bold text-gray-900 text-sm md:text-base">
            Developed and maintained by{" "}
            <a
              href="https://eshway.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:text-white transition-all"
            >
              Eshway
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
