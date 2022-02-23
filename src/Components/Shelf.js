import React from 'react'
// import { Link } from 'react-router-dom'
import Book from '../Components/Book';

const Shelf = (props) => {
    const booksSection=props.books.filter((book)=> book.shelf === props.section)
    return (
<div className="bookshelf">
                        <h2 className="bookshelf-title">{props.Title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {booksSection.map((book,i)=>(<Book book={book} key={i} changeShelf={props.changeShelf}/>))}
                            </ol>
                        </div>
                    </div>
                    
    )}

export default Shelf
