// ReviewsPage.jsx
import { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const initialReviews = [
  {
    name: "Sarah Lin",
    rating: 5,
    review: "Amazing quality and super fast delivery. I'm impressed!",
  },
  {
    name: "Michael Torres",
    rating: 4,
    review: "Great product overall, but I wish the instructions were clearer.",
  },
  {
    name: "Ava Green",
    rating: 5,
    review: "Everything about this exceeded my expectations!",
  },
  {
    name: "Liam Johnson",
    rating: 3,
    review: "It's decent, but the packaging could be better.",
  },
  {
    name: "Olivia Bennett",
    rating: 5,
    review: "Fantastic! Will definitely recommend to friends and family.",
  },
];

const StarRating = ({ rating, setRating, editable = false }) => (
  <div
    className={`flex gap-1 ${editable ? "cursor-pointer" : ""} text-yellow-400`}
    aria-label={`${rating} star rating`}
  >
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        onClick={() => editable && setRating?.(i + 1)}
        className={`w-5 h-5 transition-colors ${
          i < rating ? "fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

const ReviewCard = ({ name, rating, review, index }) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
    >
      <div className="rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white p-5 h-full">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          <StarRating rating={rating} />
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{review}</p>
      </div>
    </motion.div>
  );
};

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [formData, setFormData] = useState({ name: "", rating: 0, review: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.rating && formData.review) {
      setReviews((prev) => [...prev, { ...formData }]);
      setFormData({ name: "", rating: 0, review: "" });
    }
  };

  return (
    <section id="reviews" className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">
        What Our Customers Are Saying
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {reviews.map((rev, index) => (
          <ReviewCard key={`${rev.name}-${index}`} {...rev} index={index} />
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Share Your Review
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
          <textarea
            placeholder="Your Review"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={formData.review}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, review: e.target.value }))
            }
            rows={4}
            required
          />
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium">Your Rating:</label>
            <StarRating
              rating={formData.rating}
              setRating={(rating) =>
                setFormData((prev) => ({ ...prev, rating }))
              }
              editable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors font-semibold"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}
