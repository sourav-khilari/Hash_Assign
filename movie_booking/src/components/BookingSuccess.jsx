import React from "react";
import { useLocation, Link } from "react-router-dom";

const BookingSuccess = () => {
  const location = useLocation();
  const state = location.state || {};
  const { bookingId, name, email, mobile, movieTitle } = state;

  if (!bookingId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
        <h2 className="text-2xl font-semibold">No Booking Found</h2>
        <Link to="/" className="mt-4 text-blue-400 hover:underline">
          ← Back to Movie List
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4 w-screen">
      <div className="max-w-md w-full bg-gray-900 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">🎉 Seat Booked Successfully! 🎉</h2>
        <p className="text-blue-300 text-lg mb-4">
          Booking ID: <span className="font-mono">{bookingId}</span>
        </p>

        <div className="bg-gray-800 p-4 rounded mb-6">
          <p className="mb-2">
            <span className="font-semibold">Movie:</span> {movieTitle}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Name:</span> {name}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {email}
          </p>
          <p>
            <span className="font-semibold">Mobile:</span> {mobile}
          </p>
        </div>

        <Link to="/" className="text-blue-400 hover:underline">
          ← Back to Movie List
        </Link>
      </div>
    </div>
  );
};

export default BookingSuccess;
