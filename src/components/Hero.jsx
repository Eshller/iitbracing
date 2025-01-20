import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";
import ButtonGradient from "../assets/svg/ButtonGradient";

const Hero = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-[#166db4] font-medium">
            Welcome to
          </span>
          <h3 className="text-4xl md:text-6xl font-semibold text-black">
            IIT Bombay Racing
          </h3>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
            #Racing Up The Ladder
          </p>
          <button className="bg-[#166db4] text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
            Explore
          </button>
        </div>
        <ShuffleGrid />
      </section>
    </div>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/c1.jpeg",
  },
  {
    id: 2,
    src: "/c2.jpeg",
  },
  {
    id: 3,
    src: "/c3.jpeg",
  },
  {
    id: 4,
    src: "/c4.jpeg",
  },
  {
    id: 5,
    src: "/c5.jpg",
  },
  {
    id: 6,
    src: "/c6.jpeg",
  },
  {
    id: 7,
    src: "/c7.jpeg",
  },
  {
    id: 8,
    src: "/c8.png",
  },
  {
    id: 9,
    src: "/c9.jpeg",
  },
  {
    id: 10,
    src: "/c10.jpg",
  },
  {
    id: 11,
    src: "/c11.jpeg",
  },
  {
    id: 12,
    src: "/c12.jpeg",
  },
  {
    id: 13,
    src: "/gallery/gall1.webp",
  },
  {
    id: 14,
    src: "/gallery/gall2.webp",
  },
  {
    id: 15,
    src: "/gallery/gall3.webp",
  },
  {
    id: 16,
    src: "/gallery/gall4.webp",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;
