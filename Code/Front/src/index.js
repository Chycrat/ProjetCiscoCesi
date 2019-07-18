/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); */

/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Status from './components/Status';
import importExport from './components/ImportExport';
import Configuration from './components/Configuration';
import Console from './components/Console';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/status' component={Status} />
        <Route exact path='/import-export' component={importExport} />
        <Route exact path='/configuration' component={Configuration} />
        <Route exact path='/console' component={Console} />
      </div>
  </Router>,
  document.getElementById('root')
);
//registerServiceWorker();

