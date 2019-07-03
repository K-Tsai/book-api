import React, { Component } from 'react';

class searchForm extends Component {
  render() {
  return (
    <section className= 'searchForm'>
			<form>
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
