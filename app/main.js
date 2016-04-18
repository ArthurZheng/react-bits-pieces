import '../public/css/style.css';
import ReactDOM from 'react-dom';
import React from 'react';

import IncrementCounter from './src/increment_counter';


ReactDOM.render(
  <IncrementCounter />,
  document.getElementById('content')
);
