import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import _ from 'lodash';
import '../css/module1.css';
import App from './App.js';

render(

    <App />,document.getElementById('container'));