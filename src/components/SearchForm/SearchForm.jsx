import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context.jsx";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }
    navigate("/book");
  };

  return (
    <div className="py-4 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center bg-gray-200 rounded-lg">
              <input
                type="text"
                className="flex-grow bg-transparent border-none outline-none py-2 px-4 text-gray-700 placeholder-gray-500"
                placeholder="The Lost World ..."
                ref={searchText}
              />
              <button
                type="submit"
                className="p-2 bg-purple-600 rounded-r-lg text-white hover:bg-purple-700 transition duration-200"
              >
                <FaSearch size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
