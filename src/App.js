import React, { Component } from 'react';
import './App.css'
import SearchForm from './search-form/search-form'
import TypeForm from './type-form/typeForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDropDown: [],
      books: [{
        title : "",
        author : "",
        description : "",
        price: ""
      }],
      selected: null,
      baseUrl : "https://www.googleapis.com/books/v1/volumes"
    }
  }

  onSearchClick = (searchTerm, filter, printType) => {
    let url = this.state.baseUrl + `?q=${searchTerm}` + 
    `?filter=${filter}`+ `?printType=${printType}`+ 
    `&key=AIzaSyDivwzMumjxqEjgIiFyx9fmKchqPdW5aZk`;

    console.log(url);

    fetch(url)
      .then(response => {
        if ( response.ok ){
          return response.json();
        } else {
        }
      })
      .then(responseJSON => {
        
        let listOfbooks = responseJSON.items.map(item => {
          console.log(item);
          //if(item.saleInfo.isEbook === true) {
            return {
                title: item.volumeInfo.title,
                author: item.volumeInfo.authors[0],
                //description: item.searchInfo.textSnippet, 
                //price: item.saleInfo.listPrice.amount 
            }
        });

        this.setState({
            books : listOfbooks
        });
      });
    };
      setSelected (selected) {
        this.setState ({
          selected
        });
      }

  render() {
    return (
      <main className='App'>
        <header>
          <h1 className='googleTitle'>Google Book Search</h1>
          <SearchForm onSearchClick={this.onSearchClick}/>
          <TypeForm 
          bookInfo= {this.state.bookDropDown}
          changeHandler={selected => this.setSelected(selected)}
          />
          <div className="results">
            {this.state.books.map(book => {
              return (<div>
                        <h1> {book.title}</h1>
                        <p> {book.author}</p>
                      </div>)
            })}
          </div>
        </header>
      </main>
    );
  }
}

export default App;
