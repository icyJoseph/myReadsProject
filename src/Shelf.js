import React from "react";
import Book from "./Book";

const Shelf = ({ books, shelfName, moveShelf }) => {
  const booksList = books.map(book => (
    <Book key={book.id} book={book} moveShelf={moveShelf} />
  ));
  return (booksList.length > 0 ? (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">{booksList}</ol>
        </div>
      </div>
    </div>
  ) : null);
};

export default Shelf;
