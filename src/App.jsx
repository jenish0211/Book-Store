import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetailes from "./components/BookDetails/BookDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/about" element={<About />}></Route>
        <Route path="/book" element={<BookList />}></Route>
        <Route path="/book/:id" element={<BookDetailes />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
