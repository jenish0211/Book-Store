import React from "react";
import { Link } from "react-router-dom";

const Book = (book) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="w-full mb-4">
        <img
          src={book.cover_img}
          alt="cover"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <div className="text-center space-y-3">
        <Link to={`/book/${book.id}`} {...book}>
          <h3 className="text-lg font-bold text-gray-800 hover:text-gray-600">
            {book.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-700">Author: </span>
          {book.author.join(", ")}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-700">Total Editions: </span>
          {book.edition_count}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-700">
            First Publish Year:{" "}
          </span>
          {book.first_publish_year}
        </p>
      </div>
    </div>
  );
};

export default Book;
