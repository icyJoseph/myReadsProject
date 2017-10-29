import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
  }

  updateQuery = query => {
    this.setState({ query });
    this.props.search(query);
  };

  render() {
    const { query } = this.state;
    const { response, moveShelf, clearQuery } = this.props;
    const resultsFromSearch = response.length !== 0
      ? response.map((book, i) => (
          <Book key={i} book={book} moveShelf={moveShelf} />
        ))
      : null;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={() => clearQuery() }>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              value={query}
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{resultsFromSearch}</ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
