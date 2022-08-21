import React from "react";
import './styles.css';
import bookshelf from "./img/bookshelf.svg";
import Book from './Book';
import Dashboard from "./Dashboard";


function App() {
  
  const [books, setBooks] = React.useState([]);
  
  function resetForm(){
      document.getElementById("title").value = '';
      document.getElementById("author").value = '';
      document.getElementById("pages").value = '';
      document.getElementById("read").checked = false;
  };

  // Book constructor
  function NewBook(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  };

  // Construct book objects
  function addBookToLibrary(title, author, pages){
    let read;
    if (document.getElementById("read").checked){
      read = true;
    } else{
      read = false;
    }

    let book = new NewBook(title, author, pages, read);
    for(let i = 0; i < books.length+1; i++){
      book.id = i+1;
    }
    setBooks(prevBooks => [...prevBooks, book]);
  };

  function displayBooks(e){
      e.preventDefault();
      let title = document.getElementById("title").value;
      let author = document.getElementById("author").value;
      let pages = document.getElementById("pages").value;
      if (title && author && pages){
          addBookToLibrary(title, author, pages);
          resetForm();
          setBooks(prevBooks => {
            return prevBooks.map((book) => {
              return book
            })
          })
      } else {
          alert('Please fill out all fields');
      }
  };

  function deleteBook(id){
    let updatedBooks = [];
    books.forEach(book => {
      if (book.id !== id){
        updatedBooks.push(book)
      };
    });

    updatedBooks.forEach(book => {
      book.id = books.indexOf(book);
    });

    setBooks((prevBooks) => {
      prevBooks = updatedBooks.map((i) => {return i});
      return prevBooks;
    });
  };
  

  function toggleRead(id){
    setBooks(prevBooks => {
      return prevBooks.map((book) => {
        return book.id === id ? {...book, read: !book.read} : book
      });
    });
  };

  let bookElements = books.map(book => (
    <Book
      key={book.id}
      title={book.title}
      author={book.author}
      pages={book.pages}
      read={book.read}
      toggleRead={() => toggleRead(book.id)} 
      deleteBtn={() => deleteBook(book.id)}
    />
  ));
  
  return (
    <div className="App">
      <Dashboard
            displayBooks={displayBooks}
          />
      <div className="right-content">
        <div className="header">
            <div className="logo">
                <img className="books" src={bookshelf} alt="Bookshelf" />
                <h1>my library</h1>
            </div>
        </div>
        <div className="main">
          {bookElements}
        </div>
      </div>
    </div>
  );
}

export default App;
