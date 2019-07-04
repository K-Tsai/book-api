import React, { Component } from 'react';
import './App.css'
import SearchForm from './search-form/search-form'
import TypeForm from './type-form/typeForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{
        title : "",
        author : "",
        publishedDate : ""
      }],
      selected: null,
      baseUrl : "https://www.googleapis.com/books/v1/volumes"
    }
  }

  onSearchClick = (searchTerm) => {
    let url = this.state.baseUrl + `?q=${searchTerm}`;

    console.log(url);

    fetch(url)
      .then(response => {
        if ( response.ok ){
          return response.json();
        }
      })
      .then(responseJSON => {

        let listOfbooks = responseJSON.items.map(item => {
            return {
                title: item.volumeInfo.title,
                author: item.volumeInfo.authors[0],
                publishedDate: item.volumeInfo.publishedDate
            }
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
                        <h2> {book.title}</h2>
                        <h3> {book.author}</h3>
                        <h4> {book.publishedDate}</h4>
                      </div>)
            })}
          </div>
        </header>
      </main>
    );
  }
}

export default App;
