import React, { Component } from "react";
import Selector from "./BookControl";

class Book extends Component {
  render() {
    const {
      book: { title, authors, imageLinks, shelf },
      moveShelf
    } = this.props;
    const style = {
      width: 128,
      height: 193,
      backgroundImage: `url(${imageLinks.thumbnail})`
    };
    const bookAuthors =
      authors !== undefined ? (
        authors.map((author, i) => (
          <div key={i} className="book-authors">
            {author}
          </div>
        ))
      ) : (
        <div className="book-authors">Unknown</div>
      );
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={style} />
            <div className="book-shelf-changer">
              <Selector moveShelf={moveShelf} book={this.props.book} />
            </div>
          </div>
          <div className="book-title">{title}</div>
          {bookAuthors}
        </div>
      </li>
    );
  }
}

export default Book;
