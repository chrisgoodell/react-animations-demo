import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import 'animate.css';
import './index.css';

import slides from './slides';
import Slideshow from './Slideshow';

ReactDOM.render(<Slideshow slides={slides} />, document.getElementById('root'));
