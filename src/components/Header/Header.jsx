import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            your one-stop destination to discover books from every genre,
            author, and era. Whether you're searching for timeless classics or
            modern bestsellers, we've made it easy to find and explore the books
            you love. Start your reading journey today!
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
