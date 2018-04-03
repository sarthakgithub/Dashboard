import React from 'react';
import PropTypes from 'prop-types';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.OpenCalendar = this.OpenCalendar.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }
    
    OpenCalendar(){
        this.setState({
            isOpen: true
        });
    }

    closePopup(){
        this.setState({
            isOpen: false
        });
    }

    render() {
        return (
            <div className="calendarContainer">
                <input type="button" value="Calendar" className="calendar" onClick={this.OpenCalendar}/>
                <div>
                {
                    (this.state.isOpen) ? 
                    <div className="popup">
                        <div> 2017 </div>
                        <div className="monthContainer">
                            <div className="months">Jan</div>
                            <div className="months">Feb</div>
                            <div className="months">March</div>
                        </div>
                        <div className="monthContainer">
                            <div className="months">April</div>
                            <div className="months">May</div>
                            <div className="months">June</div>
                        </div>
                        <div className="monthContainer">
                            <div className="months">July</div>
                            <div className="months">August</div>
                            <div className="months">Sept</div>
                        </div>
                        <div className="monthContainer">
                            <div className="months">October</div>
                            <div className="months">Nov</div>
                            <div className="months">Dec</div>
                        </div>
                        <input type="button" onClick={this.closePopup}  value="close"/>
                    </div>
                    : ''
                }
                </div>
            </div>
        );
    }
}

export default Calendar;