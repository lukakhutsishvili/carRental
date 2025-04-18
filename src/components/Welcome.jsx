const Welcome = () => {
  return (
    <div className="relative w-full px-4 py-12 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image container: Use order-last on mobile to move it below the heading */}
        <div className="relative order-2 md:order-first">
          <img
            className="w-full h-auto rounded-2xl object-cover shadow-lg"
            src="/თბილისი.jpg"
            alt="Tbilisi city"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-2xl"></div>
        </div>

        {/* Text container */}
        <div className="text-white flex flex-col gap-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-white mx-auto">
              NOT YOUR AIRPORT PRICES
            </h1>
            <p className="mt-1 text-md md:text-lg text-green-500 italic">
              Your experience of Georgian hospitality starts with us.
            </p>
          </div>
        </div>
        <div className="text-base text-white sm:text-lg md:text-xl lg:text-2xl order-3 flex flex-col gap-3">
          <p>✔️ Book Now. Pay Later. No deposit. No stress.</p>
          <p>✔️ All-Inclusive Insurance. Zero excess, 100% covered.</p>
          <p>✔️ Unlimited Freedom. No mileage limits.</p>
          <p>✔️ What You See Is What You Get. We don’t do “similar cars”.</p>
          <p>✔️ We’re With You 24/7. Day or night. Anytime. Anywhere.</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
