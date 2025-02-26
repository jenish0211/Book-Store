import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";

const Header = () => {
  return (
    <div className="bg-gray-800">
      <header className="relative text-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center text-center px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold capitalize mb-4">
            Find your book of choice.
          </h2>
          <p className="text-lg md:text-xl font-light mb-6 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae
            sapiente quibusdam consequatur perspiciatis facere laboriosam non
            nesciunt at id repudiandae, modi iste? Eligendi, rerum!
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
