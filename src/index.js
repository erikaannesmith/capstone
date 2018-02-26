import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import Routes from './components/Routes'

ReactDOM.render((
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes />
  </BrowserRouter>
  ),
document.getElementById('root'));
registerServiceWorker();
