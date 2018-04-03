import React from 'react';
import PropTypes from 'prop-types';
import Accordion from './accordion.js';
import Calendar from './calendar.js';

class Outcomes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	texts : [{
			    question1: {summary:'Direction', answer:'Top Drivers- practices',marks:95,diff:6},
			    question2: {summary:'Leadership', answer:'Top Drivers- practices',marks:95,diff:6},
			    question3: {summary:'Work Enviornment', answer:'Top Drivers- practices',marks:95,diff:6},
			    question4: {summary:'Accountability', answer:'Top Drivers- practices',marks:95,diff:6}
			}]
        };
        this.renderText = this.renderText.bind(this);
    }
    
    renderText(key){
    	return <Accordion key={key} index={key} details={this.state.texts[0][key]} />;
    }

    render() {
    	
        return (
            <div>
            	<Calendar />
	            <div className="outcomeContainer">
	               <div className="outcomeNav">
	                	<p>Overall outcomes</p>
	                	<div>
		                	<select>
		                		<option>Fortnightly comparison</option>
		                	</select>
	                	</div>
	                </div> 
	                
	            </div>  
	            <div className="accordionContainer">{Object.keys(this.state.texts[0]).map(this.renderText)}</div>          	
            </div>
        );
    }
}

export default Outcomes;