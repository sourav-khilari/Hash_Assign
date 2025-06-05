import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../data/movies";

const MovieDetail = () => {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const movie = movies.find((m) => m.id === movieId);

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

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4 w-screen">
      <div className="max-w-3xl w-full bg-gray-900 rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Poster */}
          <div className="md:w-1/3">
            <img
              src={movie.poster}
              alt={`${movie.title} Poster`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
              <p className="text-gray-300 leading-relaxed">{movie.description}</p>
            </div>

            <div className="mt-6">
              <a
                href={movie.imdb}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Learn more on IMDb ▸
              </a>

              <div className="mt-4">
                <Link to={`/book/${movie.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                    Book Seat
                  </button>
                </Link>
              </div>

              <div className="mt-4">
                <Link to="/" className="text-gray-400 hover:text-gray-200 underline text-sm">
                  ← Back to Movie List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
