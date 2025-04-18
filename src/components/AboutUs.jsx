const AboutUs = () => {
  return (
    <section id="AboutUs" className="bg-black text-white py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold border-b text-purple-500 border-white pb-4">
          About Us
        </h2>

        <p className="text-lg leading-relaxed text-gray-200">
          Your Georgian adventure starts with the right car — and the right
          people. At{" "}
          <span className="font-semibold text-white">CarRentTbilisi</span>, we
          help tourists explore Georgia with comfort, freedom, and peace of
          mind.
        </p>

        <p className="text-lg leading-relaxed text-gray-200">
          We offer <strong>airport pickup</strong>, optional drivers, English &
          Russian-speaking support, and 24/7 assistance to make your trip smooth
          from start to finish.
        </p>

        <p className="text-lg leading-relaxed text-gray-200">
          Our well-maintained fleet is ready for{" "}
          <strong>city drives, mountain escapes</strong>, and everything in
          between. Looking for ideas? We also provide custom{" "}
          <strong>road trip suggestions</strong> to help you discover the real
          Georgia — beyond the guidebooks.
        </p>

        <p className="text-lg leading-relaxed text-gray-200">
          We’re travelers too, so we know how much great service matters.
        </p>

        <div>
          <h3 className="text-2xl font-semibold mb-4">⸻ Why Choose Us?</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-100 list-disc list-inside">
            <li>Airport Pickup & Drop-off</li>
            <li>Optional Professional Driver</li>
            <li>24/7 Support</li>
            <li>English, Russian Speaking Team</li>
            <li>Clean, Reliable Cars</li>
            <li>Personalized Road Trip Tips</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
