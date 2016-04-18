import '../public/css/style.css';
import ReactDOM from 'react-dom';
import React from 'react';

import IncrementCounter from './src/increment_counter';
import FilteredList from './src/filtered_list';

ReactDOM.render(
  <div class='root-component'>
    <IncrementCounter />
    <br />
    <FilteredList />
  </div>,
  document.getElementById('content')
);
