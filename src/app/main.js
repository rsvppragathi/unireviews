'use strict';

import '../client/scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';

ReactDOM.render(<Header/>, document.getElementsByTagName('header')[0]);
ReactDOM.render(<App/>, document.getElementById('app'));