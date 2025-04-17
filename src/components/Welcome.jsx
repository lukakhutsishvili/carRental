const Welcome = () => {
  return (
    <div className="w-full grid  grid-cols-2 gap-3">
      <img className="w-[100%]" src="/თბილისი.jpg" />
      <div className="flex justify-center ">
        <div className="text-white text-3xl flex flex-col gap-4">
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
