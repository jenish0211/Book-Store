import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description
              ? description.value
              : "No description found",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <button
          type="button"
          className="flex items-center mb-6 text-gray-700 hover:text-gray-500"
          onClick={() => navigate("/book")}
        >
          <FaArrowLeft size={22} className="mr-2" />
          <span className="text-lg font-semibold">Go Back</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="">
            <img
              src={book?.cover_img}
              alt="cover img"
              className="w-full h-auto rounded shadow"
            />
          </div>
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gray-800">
              {book?.title}
            </div>
            <div className="text-gray-700">{book?.description}</div>
            <div className="text-gray-700">
              <span className="font-semibold">Subject Places: </span>
              <span className="italic">{book?.subject_places}</span>
            </div>
            <div className="text-gray-700">
              <span className="font-semibold">Subject Times: </span>
              <span className="italic">{book?.subject_times}</span>
            </div>
            <div className="text-gray-700">
              <span className="font-semibold">Subjects: </span>
              {book?.subjects}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
