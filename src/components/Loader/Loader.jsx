import React from "react";
import LoaderImg from "../../images/loader.svg";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <img src={LoaderImg} alt="loader" className="w-16 h-16" />
    </div>
  );
};

export default Loader;
