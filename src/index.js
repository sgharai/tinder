import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Header from './components/Header'

render(<App />, document.getElementById('root'));
render(<Header />, document.getElementById('root'))
