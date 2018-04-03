import React from 'react';
import {render} from 'react-dom';
import '../css/module1.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";

import Overview from './overview.js';
import Practices from './practices.js';
import Outcomes from './outcomes.js';
import Filter from './filter.js';

class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <div className="navBar">
                    <ul className="navBarTabLinks">
                        <li className="navLinks" ><Link to="/overview">OVERVIEW</Link></li>
                        <li className="navLinks" ><Link to="/practices">TOP PRACTICES</Link></li>
                        <li className="navLinks" ><Link to="/outcomes">OUTCOMES</Link></li>
                        <li className="navLinks" ><Link to="/filter">FILTER</Link></li>
                    </ul>
                     
                    <Switch>
                        <Redirect exact from="/" to="/overview"/>
                        <Route  path="/overview" component={Overview}/>
                        <Route  path="/practices" component={Practices}/>
                        <Route  path="/outcomes" component={Outcomes}/>
                        <Route  path="/filter" component={Filter}/>
                    </Switch>
                </div>

            </Router>
        );
    }
}

export default App;