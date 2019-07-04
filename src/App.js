import React, { Component } from 'react';
import './App.css'
import SearchForm from './search-form/search-form'
import TypeForm from './type-form/typeForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      selected: null
    }
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=henry&key=AIzaSyDivwzMumjxqEjgIiFyx9fmKchqPdW5aZk&filter=partial&printType=books')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }
  render() {
  return (
    <main className='App'>
			<header>
      	<h1 className='googleTitle'>Google Book Search</h1>
				<SearchForm />
        <TypeForm />
			</header>
    </main>
  );
  }
}

export default App;
