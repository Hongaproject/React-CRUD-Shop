import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(

  <Provider store={store}>
    {/* <React.StrictMode> */}
      <Router>
        <App />
      </Router>
    {/* </React.StrictMode> */}
  </Provider>
);

