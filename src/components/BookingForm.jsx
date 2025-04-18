import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from "emailjs-com";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa"; // or any icon lib

function BookingForm({ car, onSuccess }) {
  const { register, handleSubmit, control, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const startDateRef = useRef();
  const endDateRef = useRef();

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

      setSuccessMessage(
        "Booking request sent successfully! Please Wait for our call"
      );

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
        {/* Start Date */}
        <div className="flex flex-col w-full relative">
          <div className="absolute z-50 right-3 top-1/2 transform text-gray-400 pointer-events-none">
            📅
          </div>
          <label className="mb-1 text-sm text-gray-600">Start Date</label>
          <Controller
            control={control}
            name="startDate"
            rules={{ required: "Start date is required" }}
            render={({ field }) => (
              <div className="relative w-full">
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"
                  onClick={() => startDateRef.current.setOpen(true)}
                >
                  📅
                </button>
                <DatePicker
                  {...field}
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    field.onChange(date);
                    if (endDate && date >= endDate) {
                      setEndDate(null);
                    }
                  }}
                  ref={startDateRef}
                  minDate={new Date()}
                  placeholderText="Select start date"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  wrapperClassName="w-full"
                />
              </div>
            )}
          />
        </div>

        {/* End Date */}
        <div className="flex flex-col w-full relative">
          <div className="absolute z-50 right-3 top-1/2 transform text-gray-400 pointer-events-none">
            📅
          </div>
          <label className="mb-1 text-sm text-gray-600">End Date</label>
          <Controller
            control={control}
            name="endDate"
            rules={{
              required: "End date is required",
              validate: (value) =>
                value && startDate && value > startDate
                  ? true
                  : "End date must be after start date",
            }}
            render={({ field }) => (
              <div className="relative w-full">
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"
                  onClick={() => endDateRef.current.setOpen(true)}
                >
                  📅
                </button>
                <DatePicker
                  {...field}
                  selected={endDate}
                  onChange={(date) => {
                    setEndDate(date);
                    field.onChange(date);
                  }}
                  minDate={
                    startDate
                      ? new Date(startDate.getTime() + 24 * 60 * 60 * 1000)
                      : new Date()
                  }
                  placeholderText="Select end date"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!startDate}
                  ref={endDateRef}
                  wrapperClassName="w-full"
                />
              </div>
            )}
          />
        </div>
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
