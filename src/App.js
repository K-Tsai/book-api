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

  onSearchClick = (searchTerm) => {
    let filter = document.getElementById('bookType').value;
    let printType= document.getElementById('printType').value;
    let url = this.state.baseUrl + `?q=${searchTerm}` 
    + `&key=AIzaSyDivwzMumjxqEjgIiFyx9fmKchqPdW5aZk`+ `&printType=${printType}`;
    if (filter !== "No Filter") {
      url += `&filter=${filter}`
    }
    console.log(filter);
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
          
          let result= {
            title: item.volumeInfo.title,
          }
          if (item.searchInfo) {
            result.description= item.searchInfo.textSnippet; 
          }
            if(item.saleInfo.listPrice) {
              result.price= item.saleInfo.listPrice.amount 
            }
            if(item.volumeInfo.author){
              result.author= item.volumeInfo.authors[0]
            }
            return result
        });

        this.setState({
            books : listOfbooks
        });
      });
    };

  render() {
    return (
      <main className='App'>
        <header>
          <h1 className='googleTitle'>Google Book Search</h1>
          <SearchForm onSearchClick={this.onSearchClick}/>
          <TypeForm />
          <div className="results">
            {this.state.books.map(book => {
              return (<div>
                        <h1> {book.title}</h1>
                        <p> {book.author}</p>
                        <p> {book.description} </p>
                        <p> {book.price} </p>
                      </div>)
            })}
          </div>
        </header>
      </main>
    );
  }
}

export default App;
