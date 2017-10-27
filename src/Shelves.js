import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import * as typeOfShelf from "./constants";

class Shelves extends Component {
  filterBooksByShelf = (books, shelf) => {
    return books.filter(book => book.shelf === shelf);
  };

  render() {
    const { books, moveShelf } = this.props;
    const shelves = Object.keys(typeOfShelf);
    const booksInShelves = shelves.map((shelf, i) => (
      <Shelf
        key={i}
        shelfName={typeOfShelf[shelf]}
        books={this.filterBooksByShelf(books, shelf)}
        moveShelf={moveShelf}
      />
    ));
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {booksInShelves}
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelves;
