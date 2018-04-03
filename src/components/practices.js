import React from 'react';
import PropTypes from 'prop-types';
import Calendar from './calendar.js';


class Practices extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="practiceContainer">
                <Calendar />
                <div className="practiceNav">
                	<p>Top Practices</p>
                	<div>
	                	<select>
	                		<option>Top Numbers</option>
	                	</select>
                	</div>
                </div>
                <div className="comments">
                	<div>
                		<p>Personal ownership</p>
                		<span>98</span>
                	</div>

                	<div>
                		<p>people perf. review</p>
                		<span>93</span>
                	</div>

                	<div>
                		<p>Talent Acquisition</p>
                		<span>89</span>
                	</div>

                	<div>
                		<p>Supportive Leadership</p>
                		<span>89</span>
                	</div>

                	<div>
                		<p>Challenging leadership</p>
                		<span>87</span>
                	</div>
                </div>
            </div>
        );
    }
}

export default Practices;