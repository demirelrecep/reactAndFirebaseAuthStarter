import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PetProvider from "./context/petContext";

ReactDOM.render(
  <PetProvider>
    <App />
  </PetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister()