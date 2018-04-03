import React from 'react';
import PropTypes from 'prop-types';
import srcurl from '../../assets/chart.png';
import Calendar from './calendar.js';

class Overview extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Calendar />
                <div className="overviewContainer">
                    <h2>your organization health looks good this month</h2>
                    <div>78</div>
                    <img src={srcurl} />
                    <p>Double tap in this area to zoom in</p>
                </div>
                <div className="responseRate">
                    <h2>Response Rate</h2>
                    <div> 83% </div>
                    <p> 2100/2500 respondants </p>
                </div>
            </div>
        );
    }
}

export default Overview;