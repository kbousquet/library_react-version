import deleteBtn from './img/delete.svg'
export default function Book(props){

    return(
        <div className="card">
                <button className="delete"><img src={deleteBtn} /></button>
                <div className="book-info">
                    <p>{props.title}</p>
                    <p>By {props.author}</p>
                    <p>{props.pages} Pages</p>
                    {/* <button className="read">Read</button> */}
                </div>
        </div>
    )


}