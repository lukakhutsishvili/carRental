import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from "emailjs-com";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function BookingForm({ car, onSuccess }) {
  const { register, handleSubmit, control, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    const emailData = {
      ...data,
      car_model: `${car.make} ${car.model}`,
      price: `$${car.price}/day`,
    };

    try {
      setLoading(true);
      await emailjs.send(
        "service_jgxa7q3",
        "template_5zec5wf",
        emailData,
        "AsaDjBGc8ZdeW1r7-"
      );
      reset();
      onSuccess();

      setSuccessMessage("Booking request sent successfully! Please Wait for our call");

      // Hide the message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("There was an error sending your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 border p-6 rounded-2xl shadow-lg max-w-md mx-auto bg-white"
    >
      <h3 className="text-2xl font-semibold text-gray-800">Book this car</h3>

      <input
        {...register("name", { required: true })}
        placeholder="Your Full Name"
        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email Address"
        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <Controller
        name="phone"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <PhoneInput
            {...field}
            country={"ge"}
            inputClass="!w-full p-3 !border !border-gray-300 !rounded-xl !focus:outline-none !focus:ring-2 !focus:ring-blue-500"
            containerClass="!w-full"
            inputStyle={{
              width: "100%",
              paddingLeft: "48px", 
            }}
            specialLabel=""
            enableSearch
          />
        )}
      />

      <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
        <input
          {...register("startDate", { required: true })}
          type="date"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          {...register("endDate", { required: true })}
          type="date"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full text-white p-3 rounded-xl transition-all duration-300 ${
          loading
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Sending..." : "Book Now"}
      </button>
      {successMessage && (
        <div className="text-green-600 bg-green-100 border border-green-300 p-3 rounded-xl text-sm">
          {successMessage}
        </div>
      )}
    </form>
  );
}

export default BookingForm;
