import GitHubIcon from "./img/GitHubIcon.png";

export default function Dashboard(props){
    return(
        <div className="dashboard">
            <div className="book-form">
                <h2>Add Book</h2>
                <form>
                    <div className="form-element">
                        <label for="title">Title*</label>
                        <input type="text" id="title" placeholder="Book title" required />
                    </div>
                    <div className="form-element">
                        <label for="author">Author</label>
                        <input type="text" id="author" placeholder="Author's name" maxLength="50" />
                    </div>
                    <div className="form-element">
                        <label for="pages">Pages</label>
                        <input type="number" id="pages" placeholder="Number of pages" onInput={(e) => e.target.value = e.target.value.slice(0, 5)} />
                    </div>
                    <div className="form-element">
                        <div>
                            <input type="checkbox" id="read" />
                            <label for="read">Read yet?</label>
                        </div>
                    </div>
                    <div className="form-element">
                        <button type="submit" className = "addBook" onClick={props.displayBooks}>Add to Library</button>
                    </div>
                </form>
            </div> 
            {/* <form className="filter-form" action="">
                <label for="filter">Filter Results</label>
                <select className="filter" id="filter" onChange={props.filter}>
                    <option value="no-filter">No filter</option>
                    <option value="read">Read</option>
                    <option value="not-read">Not read</option>
                </select>
            </form> */}
            <p className="footer">Code by kbousquet <a href="https://github.com/kbousquet/library_react-version" target="_blank" rel="noreferrer"> <img src={GitHubIcon} alt="Git Hub icon" height="20" /></a></p>
        </div>
    )
}
