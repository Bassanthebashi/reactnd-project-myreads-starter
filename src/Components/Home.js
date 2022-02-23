import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from '../Components/Shelf';

const Home = (props) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf Title="Currently Reading" books={props.books} section="currentlyReading" changeShelf={props.changeShelf}/>
                    <Shelf Title="Want to Read" books={props.books} section="wantToRead" changeShelf={props.changeShelf}/>
                    <Shelf Title="Read" books={props.books} section="read" changeShelf={props.changeShelf}/>
                </div>
            </div>
            <div className="open-search">
                <Link to="/Search" className="openSearch">Add A Book</Link>

            </div>
        </div>
    )
}
export default Home