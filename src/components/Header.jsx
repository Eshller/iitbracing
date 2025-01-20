import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "./Button";
import { useState } from "react";
import { navigation } from "../constants";
import { HamburgerMenu } from "./design/Header";
import ButtonGradient from "../assets/svg/ButtonGradient";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-gray-900/90 lg:backdrop-blur-sm transition-colors duration-300 ${openNavigation ? "bg-gray-900" : "bg-gray-900/90 backdrop-blur-sm"
        }`}
    >
      <div className="flex justify-between items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src="/whitelogo.png" width={150} height={40} alt="IIT Bombay Racing" />
        </a>
        <button
          onClick={toggleNavigation}
          className="relative z-50 lg:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-center items-center">
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${openNavigation ? 'rotate-45 translate-y-1.5' : ''
              }`} />
            <span className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-out ${openNavigation ? 'opacity-0' : ''
              }`} />
            <span className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-out ${openNavigation ? '-rotate-45 -translate-y-1.5' : ''
              }`} />
          </div>
        </button>
        <nav
          className={`${openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 transition-all duration-300 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={() => {
                  setOpenNavigation(false);
                  enablePageScroll();
                }}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                  } px-2 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-8`}
                style={{
                  transitionDelay: `${openNavigation ? item.id * 100 : 0}ms`
                }}
              >
                {item.title}
              </a>
            ))}
          </div>
          {/* <HamburgerMenu /> */}

          {/* <Button
            onClick={toggleNavigation}
            className="relative z-50 lg:hidden w-10 h-10 flex items-center justify-center"
          >
            <svg class="overflow-visible" width="20" height="12" viewBox="0 0 20 12">
              <rect class="transition-all origin-center" y="0" width="20" height="2" rx="1" fill="white" transform="rotate(0)"></rect>
              <rect class="transition-all origin-center" y="10" width="20" height="2" rx="1" fill="white" transform="rotate(0)">
              </rect></svg>
            <ButtonGradient />
          </Button> */}

        </nav>
      </div>
    </div>
  );
};

export default Header;
