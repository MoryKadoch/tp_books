import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import EditBook from "./components/EditBook";
import AddBook from "./components/AddBook";
import SearchBook from "./components/SearchBook";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/search-book" element={<SearchBook />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;