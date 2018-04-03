import React from 'react';
import PropTypes from 'prop-types';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive : false
        };
        this.toggleState = this.toggleState.bind(this);
    }
    
    toggleState(){
        this.setState({isActive : !this.state.isActive});
    }

    render(){
        const question = this.props.details;
        return(
          <div>
            <div className="textHead" onClick={this.toggleState}>
                <span> > </span>
                <div className="summary">{question.summary}</div>
                <div className="marks">{question.marks}</div>
                <div className="diff">{question.diff}</div>
            </div>
            <div className={this.state.isActive?"show":"hide"}>
                <div className="summary">{question.answer}</div>
                <div className="marks">{question.marks}</div>
                <div className="diff">{question.diff}</div>
            </div>

          </div>
        );
    }
}

export default Accordion;