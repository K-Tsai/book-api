import React, { Component } from 'react';

class typeForm extends Component {
  render() {
    
  return (
    <section className= 'typeForm'>
			<form>
				<fieldset>
				  <select id="printType" name="print">
            <option value="None">Select one...</option>
          </select>
          <select id="bookType" name="book">
            <option value="None">Select one...</option>
          </select>
				</fieldset>
			</form>
		</section>
  );
  }
}

export default typeForm;