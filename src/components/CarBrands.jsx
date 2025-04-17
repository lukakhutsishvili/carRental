import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const brands = [
  {
    name: "LEXUS",
    img: "/Brands/lexus.avif",
  },
  {
    name: "NISSAN",
    img: "/Brands/NISSAN.svg",
  },
  {
    name: "TOYTOTA",
    img: "/Brands/toytoa.svg",
  },
  {
    name: "HYUNDAI",
    img: "/Brands/hiundai.avif",
  },
  {
    name: "BMW",
    img: "/Brands/bmw.svg",
  },
  {
    name: "FORD",
    img: "/Brands/ford.avif",
  },
];

export default function CarBrands() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-black text-white py-10 px-4 relative">
      <h2 className="text-3xl text-purple-500  font-bold text-center mb-8">
        Rent A Car in TBILISI - Top Brands
      </h2>

      <div className="relative flex items-center justify-center">
        {/* <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-transparent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white p-2 rounded-md"
        >
          <ChevronLeft />
        </button> */}

        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-hidden px-10 pointer-events-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className=" items-center min-w-[100px] pointer-events-auto"
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="h-40 w-40  object-contain"
              />
              <p className="mt-[-20px] text-sm font-semibold text-center">
                {brand.name}
              </p>
            </div>
          ))}
        </div>

        {/* <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 bg-transparent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white p-2 rounded-md"
        >
          <ChevronRight />
        </button> */}
      </div>
    </div>
  );
}
