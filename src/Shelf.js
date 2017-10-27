import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  render() {
    const { books, shelfName, moveShelf } = this.props;
    const booksList = books.map(book => <Book key={book.id} book={book} moveShelf={moveShelf} />);
    return booksList.length > 0 ? (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">{booksList}</ol>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default Shelf;
