import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import "../../src/index.css"; // for the custom scrollbar hiding class

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
        {/* Brands Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 xl:justify-center overflow-x-auto scroll-smooth md:px-6 py-2 w-full custom-scrollbar-hide"
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="md:flex-shrink-0 flex flex-col items-center w-32 xl:w-auto"
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="max-w-md w-20 md:w-24 h-24 md:h-32 xl:w-32 object-contain"
              />
              <p className="mt-2 text-sm font-semibold text-center">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
