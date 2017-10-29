import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import Shelves from "./Shelves";
import * as typeOfShelf from "./constants";
import "./App.css";

class BooksApp extends Component {
  state = {
    books: [],
    response: [],
    error: ""
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  moveShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then(resp =>
        BooksAPI.get(book.id).then(updatedBook => {
          const [BookInState] = this.state.books.filter(
            book => book.id === updatedBook.id
          );
          if (BookInState) {
            this.setState(prevState => ({
              books:
                updatedBook.shelf === typeOfShelf.none
                  ? prevState.books.filter(book => book.id !== BookInState.id)
                  : prevState.books.map(
                      book => (book.id === updatedBook.id ? updatedBook : book)
                    )
            }));
          } else {
            this.setState(prevState => ({
              books: prevState.books.concat(updatedBook)
            }));
          }
        })
      )
      .catch(err => console.log(err));
  };

  search = query => {
    BooksAPI.search(query, 1)
      .then(books => {
        const { error } = books;
        if (error) {
          this.setState({ error });
        } else {
          this.setState(prevState => ({
            response: books.map(book => {
              const [booksInShelf] = prevState.books.filter(
                localStateBooks => book.id === localStateBooks.id
              );
              return booksInShelf
                ? booksInShelf
                : { ...book, shelf: typeOfShelf.none };
            }),
            error: ""
          }));
        }
      })
      .catch(err => console.log(err));
  };

  clearQuery = () => {
    this.setState({ response: [] });
  };

  render() {
    const { books, response, error } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <Shelves books={books} moveShelf={this.moveShelf} />}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              response={response}
              error={error}
              search={this.search}
              clearQuery={this.clearQuery}
              moveShelf={this.moveShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
