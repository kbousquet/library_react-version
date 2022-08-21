import React from "react";
import './styles.css';
import GitHubIcon from "./img/GitHubIcon.png";
import bookshelf from "./img/bookshelf.svg";
import Book from './Book';


function App() {
  
  const [books, setBooks] = React.useState([]);
  
  function openForm(){
    document.querySelector(".popup").classList.add("active");
  };
  function closeForm(){
    document.querySelector(".popup").classList.remove("active");
  };
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
      <div className="popup">
          <div className="close-btn" onClick={closeForm}>&times;</div>
          <div className="form">
              <h2>Add Book</h2>
              <form action="">
                  <div className="form-element">
                      <label for="title">Title</label>
                      <input type="text" id="title" placeholder="Book title" required />
                  </div>
                  <div className="form-element">
                      <label for="author">Author</label>
                      <input type="text" id="author" placeholder="Author's name" maxLength="50" required />
                  </div>
                  <div className="form-element">
                      <label for="pages">Pages</label>
                      <input type="number" id="pages" placeholder="Number of pages" onInput={(e) => e.target.value = e.target.value.slice(0, 5)} required />
                  </div>
                  <div className="form-element">
                      <input type="checkbox" id="read" />
                      <label for="read">Read yet?</label>
                  </div>
                  <div className="form-element">
                      <button className = "addBook" onClick={displayBooks}>Add to Library</button>
                  </div>
              </form>
          </div> 
      </div>
      <div className="container">
        <div className="header">
            <div className="logo">
                <img className="books" src={bookshelf} alt="Bookshelf" />
                <h1>my library</h1>
            </div>
            <button className="add-btn" onClick={openForm}>Add Book</button>
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
