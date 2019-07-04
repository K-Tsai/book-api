import React, { Component } from 'react';

class searchForm extends React.Component {

	onFormSubmit = (event) => {
		event.preventDefault();

		let searchTerm = event.currentTarget.searchInput.value;
        this.props.onSearchClick(searchTerm);
	}

	render() {
	  return (
		<section className= 'searchForm'>
				<form onSubmit={this.onFormSubmit}>
					<fieldset>
						<label htmlFor= 'searchInput'>Search: </label>
						<input type='text' id= 'searchInput'/>
						<button type='submit'>Search</button>
					</fieldset>
				</form>
			</section>
	  );
  }
}

export default searchForm;
