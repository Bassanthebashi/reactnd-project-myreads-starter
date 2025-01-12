import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class book extends Component{
    updateOnChoice=(event)=>{
        this.props.changeShelf(this.props.book,event.target.value)
}
    render(){
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.book.imageLinks?`url(${this.props.book.imageLinks.smallThumbnail})`:" " }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.updateOnChoice} value={this.props.book.shelf?this.props.book.shelf:"none"}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors?this.props.book.authors:'no author name'}</div>
            </div>
        )
    }
}