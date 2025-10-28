import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";
import { navigation } from "../constants";

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
    <div className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a] border-b border-[#7c3aed]/30">
      <div className="flex justify-between items-center px-6 lg:px-12 xl:px-16 h-24">
        {/* Logo */}
        <a className="block w-[10rem] lg:w-[12rem]" href="/">
          <img 
            src="/new/footer.png" 
            width={150} 
            height={40} 
            alt="IIT Bombay Racing" 
            className="w-full h-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className={`relative px-5 text-sm font-medium uppercase tracking-wider transition-colors duration-200
                ${item.url === pathname.pathname
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNavigation}
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-center items-center">
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
              openNavigation ? 'rotate-45 translate-y-1.5' : ''
            }`} />
            <span className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-out ${
              openNavigation ? 'opacity-0' : ''
            }`} />
            <span className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-out ${
              openNavigation ? '-rotate-45 -translate-y-1.5' : ''
            }`} />
          </div>
        </button>

        {/* Mobile Navigation */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-[#0a0a0a] lg:hidden`}
        >
          <div className="flex flex-col items-center justify-center w-full gap-2">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={() => {
                  setOpenNavigation(false);
                  enablePageScroll();
                }}
                className={`block text-2xl uppercase font-semibold transition-colors duration-200 py-4
                  ${item.url === pathname.pathname
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
