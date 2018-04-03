import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            active : true
        };
    }

    render(){
        
        return(
           <div className="filterContainer">
            <p>Filter By </p>
            <div>
                <p> Buisness Unit</p>
                <select>
                    <option>All</option>
                </select>
            </div>

            <div>
                <p> Region</p>
                <select>
                    <option>All</option>
                </select>
            </div>

            <div>
                <p> Tenure</p>
                <select>
                    <option>All</option>
                </select>
            </div>

            <div>
                <p> Age</p>
                <select>
                    <option>All</option>
                </select>
            </div>

            <input type="button" value="Reset" />

            <input type="button" value="Apply" />
          </div>
        );
    }
}

export default Filter;