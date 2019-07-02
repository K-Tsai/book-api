import React, { Component } from 'react';
import './App.css'
import SearchForm from './search-form/search-form'

class App extends Component {
  render() {
  return (
    <main className='App'>
			<header>
      	<h1 className='googleTitle'>Google Book Search</h1>
				<SearchForm />
			</header>
    </main>
  );
  }
}

export default App;
