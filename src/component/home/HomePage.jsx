// HomePage.jsx

import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="imageContainer"></div>
      <h1 className="heading">Welcome to Pariwisata Bali</h1>
      <p className="paragraph">
        Selamat datang di website resmi wisata bali indonesia.
      </p>
      <a href="./projects">
      <button className="button">Wisata</button>
      </a>
    </div>
  );
};

export default HomePage;