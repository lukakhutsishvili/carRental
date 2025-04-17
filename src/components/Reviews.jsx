// ReviewsPage.jsx
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Jane Doe",
    rating: 5,
    review: "Absolutely love this product! Great quality and fast delivery.",
  },
  {
    name: "John Smith",
    rating: 4,
    review:
      "Very good, but there’s a bit of room for improvement in packaging.",
  },
  {
    name: "Emily Carter",
    rating: 5,
    review: "Exceeded my expectations. Will definitely purchase again!",
  },
  {
    name: "John Smith",
    rating: 4,
    review:
      "Very good, but there’s a bit of room for improvement in packaging.",
  },
  {
    name: "Emily Carter",
    rating: 5,
    review: "Exceeded my expectations. Will definitely purchase again!",
  },
];

// Separated StarRating for reusability and cleanliness
const StarRating = ({ rating }) => (
  <div
    className="flex gap-1 text-yellow-400"
    aria-label={`${rating} star rating`}
  >
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
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
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
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
  return (
    <section id="reviews" className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        What Our Customers Are Saying
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((rev, index) => (
          <ReviewCard key={`${rev.name}-${index}`} {...rev} index={index} />
        ))}
      </div>
    </section>
  );
}
