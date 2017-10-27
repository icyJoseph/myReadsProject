import React, { Component } from "react";
import Selector from "./BookControl";

class Book extends Component {
  render() {
    const { book: { id, title, author, imgURL, shelf }, moveShelf } = this.props;
    const style = {
      width: 128,
      height: 193,
      backgroundImage: `url(${imgURL})`
    };
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={style} />
            <div className="book-shelf-changer">
              <Selector currentShelf={shelf} moveShelf={moveShelf} id={id} />
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    );
  }
}

export default Book;
