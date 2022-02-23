import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Components/Home';
import Search from './Components/Search'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books:[],
    search:'',
    searchedBooks:[]
  }
getSearchedBook=async (event)=>{
  await this.setState({
    search:event.target.value
  })
  this.getSearchedBooks(this.state.search)

}
getSearchedBooks=async(search)=>{
  await BooksAPI.search(search).then((response)=>{
    this.setState({searchedBooks:response})
  })
}
componentDidMount(){
  BooksAPI.getAll().then((response)=>{
    this.setState({
      books:response
    })
  }

  )
}
changeShelf = async (book,shelf)=>{
  await BooksAPI.update(book,shelf);
  await BooksAPI.getAll().then((response)=>{
    this.setState({
      books:response
    })
  })
}

  render() {
    return (
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home books={this.state.books} changeShelf={this.changeShelf}/>}>
            </Route>
            <Route path="/Search" element={<Search changeShelf={this.changeShelf} getSearchedBook={this.getSearchedBook} search={this.state.search} searchedBooks={this.state.searchedBooks}/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default BooksApp
