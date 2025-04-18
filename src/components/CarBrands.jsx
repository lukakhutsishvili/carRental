import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const brands = [
  { name: "LEXUS", img: "/Brands/lexus.avif" },
  { name: "NISSAN", img: "/Brands/NISSAN.svg" },
  { name: "TOYTOTA", img: "/Brands/toytoa.svg" },
  { name: "HYUNDAI", img: "/Brands/hiundai.avif" },
  { name: "BMW", img: "/Brands/bmw.svg" },
  { name: "FORD", img: "/Brands/ford.avif" },
];

export default function CarBrands() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -250 : 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-black text-white py-10 px-4 relative">
      <h2 className="text-2xl md:text-3xl text-purple-500 font-bold text-center mb-8">
        Rent A Car in TBILISI - Top Brands
      </h2>

      <div className="relative flex items-center">
        {/* Scroll Left Button */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-2 z-10 bg-purple-700 hover:bg-purple-600 text-white p-2 rounded-full shadow"
        >
          <ChevronLeft />
        </button>

        {/* Brands Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth md:px-6 py-2 w-full no-scrollbar"
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="md:flex-shrink-0 flex flex-col items-center w-32 md:w-40"
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="max-w-md w-20 h-24 md:h-32 md:w-auto object-contain"
              />
              <p className="mt-2 text-sm font-semibold text-center">
                {brand.name}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-2 z-10 bg-purple-700 hover:bg-purple-600 text-white p-2 rounded-full shadow"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
