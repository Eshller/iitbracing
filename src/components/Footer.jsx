import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <footer>
        <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24"><div class="grid grid-cols-1 gap-8 lg:grid-cols-3"><div><div class="flex justify-center text-gray-400 sm:justify-start">Racing Team IIT Bombay</div><p class="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">IIT Bombay Racing is India's premier Formula Student Electric team with a vision to <span class="font-bold">Revolutionize Electric Mobility in India</span>.</p>
          <ul class="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8"><li>
            <a rel="noreferrer" class="text-teal-700 transition hover:text-teal-700/75" href="https://www.facebook.com/iitbracing/" target="_blank">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
            </a>
          </li>
            <li>
              <a rel="noreferrer" class="text-teal-700 transition hover:text-teal-700/75" href="https://www.instagram.com/iitbombayracing/?hl=en" target="_blank">
                <span class="sr-only">Instagram</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
              </a>
            </li>
            <li>
              <a rel="noreferrer" class="text-teal-700 transition hover:text-teal-700/75" href="https://twitter.com/IITB_Racing" target="_blank">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a rel="noreferrer" class="text-teal-700 transition hover:text-teal-700/75" href="https://in.linkedin.com/company/iit-bombay-racing" target="_blank">
                <span class="sr-only">Linkedin</span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
              </a>
            </li>
          </ul>
        </div>
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div class="text-center sm:text-left"><p class="text-lg font-medium text-gray-700">Magazine</p>
              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <div class="mx-auto max-w-md">
                    <form class="mt-6">
                      <div class="relative max-w-lg">
                        <label class="sr-only" for="email"> Email </label>
                        <input class="justify-center w-full rounded-full border-gray-200 bg-gray-800 p-4 pe-32 text-sm font-medium " id="email" type="email" placeholder="tech@iitbombayracing.org" />
                        <button class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-700">Contact Us</p>
              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <span class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-5 shrink-0 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span class="flex-1 text-gray-400">tech@iitbombayracing.org</span>
                  </span>
                </li>
                <li>
                  <span class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-5 shrink-0 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span class="flex-1 text-gray-400">+91 7875692712</span></span></li><li><span class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                      <svg xmlns="http://www.w3.org/2000/svg" class="size-5 shrink-0 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span class="flex-1 text-gray-400">+91 9930779212
                      </span>
                    </span>
                </li>
                <li class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" class="size-5 shrink-0 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <address class="-mt-0.5 flex-1 not-italic text-gray-400">IIT Bombay, Powai, 400076, India</address></li>
              </ul>
            </div>
            <div class="text-center sm:text-left"><p class="text-lg font-medium text-gray-700">Helpful Links</p>
              <ul class="mt-8 space-y-4 text-sm"><li><a class="text-gray-400 transition hover:text-gray-400/75" href="/team">Our Team</a>
              </li>
                <li>
                  <a class="text-gray-400 transition hover:text-gray-400/75" href="/cars"> Cars </a>
                </li>
                <li>
                  <a class="text-gray-400 transition hover:text-gray-400/75" href="/achievements"> Achievements </a>
                </li>
                <li>
                  <a class="text-gray-400 transition hover:text-gray-400/75" href="/sponsors"> Sponsors </a>
                </li>
                <li>
                  <a class="text-gray-400 transition hover:text-gray-400/75" href="/gallery"> Gallery </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
          <div class="mt-12 border-t border-gray-100 pt-6">
            <div class="text-center sm:flex sm:justify-between sm:text-left">
              <p class="text-sm text-gray-500">
                <span class="block sm:inline">All rights reserved.</span>
                <a class="inline-block text-teal-500 underline transition hover:text-teal-500/75" href="/">Terms &amp; Conditions</a>
                <span>·</span>
                <a class="inline-block text-teal-500 underline transition hover:text-teal-500/75" href="/">Privacy Policy</a></p>
              <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">© 2024 IITB Racing</p>
            </div>
          </div>
        </div>
        <div class="inset-x-0 bottom-0 w-100">
          <div class="bg-[#d86dfc] px-4 py-3 text-gray-900">
            <p class="text-center font-bold text-md">Developed and maintained by &nbsp;
              <a href="https://eshway.com" target="_blank" class="inline-block hover:text-[#7d6c83] transition-all">Eshway</a>
            </p>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
