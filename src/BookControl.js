import React from "react";
import * as typeOfShelf from "./constants";

const Selector = ({ book, moveShelf }) => {
  const shelves = Object.keys(typeOfShelf);
  const options = shelves.map((shelf, i) => (
    <option key={i} value={shelf}>
      {typeOfShelf[shelf]}
    </option>
  ));
  return (
    <select
      value={book.shelf}
      onChange={e => moveShelf(book, e.target.value)}
    >
      <option value="handle" disabled>
        Move to...
      </option>
      {options}
    </select>
  );
};

export default Selector;
