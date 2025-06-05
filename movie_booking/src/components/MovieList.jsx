import React from "react";
import { Link } from "react-router-dom";
import movies from "../data/movies";

const MovieList = () => {
  return (
    <div className="min-h-screen bg-black text-white w-screen">
      <h2 className="text-3xl font-bold text-center py-6">Marvel Movies (4×4 Grid)</h2>

      <div className="px-4 pb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((m) => (
          <Link
            to={`/movie/${m.id}`}
            key={m.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200"
            title={m.title}
          >
            <img
              src={m.poster}
              alt={`${m.title} Poster`}
              className="w-full h-48 object-cover"
            />
            <div className="p-2">
              <h3 className="text-sm font-medium text-center">{m.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
