import React, { Component } from 'react';

class typeForm extends Component {
  render() {
    
  return (
    <section className= 'typeForm'>
			<form>
				<fieldset>
				  <select id="print" name="print">
            <option value="None">Select one...</option>
          </select>
          <select id="book" name="book">
            <option value="None">Select one...</option>
          </select>
				</fieldset>
			</form>
		</section>
  );
  }
}

export default typeForm;