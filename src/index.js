import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import "bulma/css/bulma.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
