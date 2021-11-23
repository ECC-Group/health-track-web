import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Store from 'shared/store';
import Authentication from 'shared/components/authentication';
import Router from './router';

import './App.scss';

const App = () => (
    <Provider store={Store}>
      <BrowserRouter>
        <Authentication>
          <Router />
        </Authentication>
      </BrowserRouter>
    </Provider>
  );

export default App;
