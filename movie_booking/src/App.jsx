// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import BookingForm from "./components/BookingForm";
import BookingSuccess from "./components/BookingSuccess";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/success" element={<BookingSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
