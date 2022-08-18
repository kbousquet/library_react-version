import React from "react";
import './styles.css';
import GitHubIcon from "./img/GitHubIcon.png";
import bookshelf from "./img/bookshelf.svg";
import Book from './Book';


function App() {
  const bookList =[
    {
      id: 1,
      title: "Twilight",
      author: "Stephanie Meyer",
      pages: "498",
      read: true
    }
  ];

  const [books, setBooks] = React.useState(bookList);

  function toggleRead(id){
    setBooks(prevBooks => {
      return prevBooks.map((book) => {
        return book.id === id ? {...book, read: !book.read} : book
      });
    });
  };

  const bookElements = books.map(book => (
    <Book
      key={book.id}
      title={book.title}
      author={book.author}
      pages={book.pages}
      read={() => toggleRead(book.id)} 
    />
  ));
  
  return (
    <div className="App">
      <div className="container">
        <div className="header">
            <div className="logo">
                <img className="books" src={bookshelf} />
                <h1>my library</h1>
            </div>
            <button className="add-btn">Add Book</button>
        </div>
        <div className="main">
          {bookElements}
        </div>
        <div className="spacer"></div>
    </div>
    
    <div className="footer">
        <p>Code by kbousquet <a href="https://github.com/kbousquet/library"> <img src={GitHubIcon} alt="Git Hub icon" height="20" /></a></p>
    </div>
    </div>
  );
}

export default App;
