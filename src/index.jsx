import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TimeContextProvider from './contexts/TimeContext'

ReactDOM.render(
  <TimeContextProvider>
    <App />
  </TimeContextProvider>,
  document.getElementById('root')
);