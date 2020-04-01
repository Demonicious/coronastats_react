import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './Assets/style/fonts.css';
import './Assets/style/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();