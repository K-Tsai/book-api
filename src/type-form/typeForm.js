import React, { Component } from 'react';

class typeForm extends Component {

  render() {
    
  return (
    <section className= 'typeForm'>
			<form>
				<fieldset>
				  <select id="bookType" name="print">
            <option value="No Filter">No Filter</option>
            <option value="partial">partial</option>
            <option value="full">full</option>
            <option value="free-ebooks">free-ebooks</option>
            <option value="ebooks">ebooks</option>
          </select>
          <select id="printType" name="book">
            <option value="all">all</option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
          </select>
				</fieldset>
			</form>
		</section>
  );
  }
}

export default typeForm;