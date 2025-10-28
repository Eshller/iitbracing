import React from "react";
import Section from "./Section";
import { hr } from "framer-motion/client";

const Footer = () => {
  return (<>
<hr className="border-0 h-[2px] bg-gradient-to-r from-[#9D17A2] to-[#3A093C] opacity-80 rounded-full" />
      <footer className="bg-black text-white">
        <div className="container py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Left: About Racing Team */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Racing Team IIT Bombay</h3>
              <p className="text-white/80 leading-relaxed">
                IIT Bombay Racing is India's premier Formula Student Electric team with a vision to Revolutionize Electric Mobility in India.
              </p>
            </div>

            {/* Center: Logo/Image */}
            <div className="flex justify-center">
              <img 
                src="/new/footer.png" 
                alt="IIT Bombay Racing Logo" 
                className="w-48 h-auto object-contain"
              />
            </div>

            {/* Right: Contact Us */}
            <div className="text-center md:text-right">
              <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold text-xl px-8 py-4 rounded-full mb-6 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              <ul className="space-y-2 text-white/80">
                <li>• tech@iitbombayracing.org</li>
                <li>• +91 7875692712</li>
                <li>• +91 9930779212</li>
                <li>• IIT Bombay, Powai, 400076, India</li>
              </ul>
            </div>
          </div>

          {/* Bottom: Copyright */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-white/60 text-sm">
              © 2024 IITB Racing. All rights reserved.
            </p>
          </div>
        </div>

        {/* Developed By Eshway */}
        <div className="bg-[#d86dfc] px-4 py-3">
          <p className="text-center font-bold text-gray-900">
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
