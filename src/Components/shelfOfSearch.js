import React, { Component } from 'react'
import Book from '../Components/Book';

export default class ShelfOfSearch extends Component{
    render(){
        return(
            // <div className="search-books-results">
            //     <ol className="books-grid">
            //     {this.props.searchedBooks.map((book,i)=>(
            //         <Book book={book} key={i} changeShelf={this.props.changeShelf}/>))}
            //     </ol>
            // </div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">Searched Books</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {
                    this.props.loadedSearch?
                    ( this.props.searchedBooks.map((book,i)=>(<Book book={book} key={i} changeShelf={this.props.changeShelf}/>))):
                    (this.props.searchedBooks)
                    
                }
                </ol>
            </div>
        </div>
        )
    }
}