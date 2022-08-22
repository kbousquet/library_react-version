import deleteBtn from './img/delete.svg'
export default function Book(props){
       
    const styles = {
        backgroundColor: props.read ? "rgb(56, 100, 79)" : "rgb(110, 58, 58)"
    }

    return(
        <div className="card">
                <button className="delete"><img src={deleteBtn} alt="Delete button" onClick={props.deleteBtn} /></button>
                <div className="book-info">
                    <h2 className="title">{props.title}</h2>
                    <p className="author">By: {props.author}</p>
                    <p className="pages">Pages: {props.pages}</p>
                    <button className="readStatus" style={styles} onClick={props.toggleRead}>{props.read ? 'Read' : 'Not read'}</button>
                </div>
        </div>
    )


}