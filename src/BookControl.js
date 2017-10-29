import React from "react";
import * as typeOfShelf from "./constants";

const Selector = ({ props, book, currentShelf, moveShelf }) => {
  const shelves = Object.keys(typeOfShelf);
  const options = shelves.map((shelf, i) => (
    <option key={i} value={shelf}>
      {typeOfShelf[shelf]}
    </option>
  ));
  return (
    <select defaultValue={currentShelf} onChange={ (e) => moveShelf(book, e.target.value)}>
      <option value="none" disabled>
        Move to...
      </option>
      {options}
    </select>
  );
};

export default Selector;
