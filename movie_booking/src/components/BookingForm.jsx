// src/components/BookingForm.jsx
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import movies from "../data/movies";

const BookingForm = () => {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const movie = movies.find((m) => m.id === movieId);

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h2 className="text-2xl font-semibold">Movie Not Found</h2>
        <Link to="/" className="mt-4 text-blue-400 hover:underline">
          ← Back to Movie List
        </Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.random().toString(36).substring(2, 8).toUpperCase();
    navigate("/success", {
      state: { bookingId, name, email, mobile, movieTitle: movie.title },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4 w-screen">
      <div className="max-w-md w-full bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Book Seat for:</h2>
        <h3 className="text-xl text-center text-blue-300 mb-4">{movie.title}</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-gray-300 mb-1">
              Mobile
            </label>
            <input
              id="mobile"
              type="tel"
              required
              placeholder="+91 9876543210"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded transition-colors duration-200"
          >
            Submit
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to={`/movie/${movie.id}`}
            className="text-gray-400 hover:text-gray-200 underline text-sm"
          >
            ← Back to Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
