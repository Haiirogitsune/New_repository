import { BrowserRouter } from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Provider2 from "./components/Provider";
import {store} from './store'
import { Provider } from "react-redux";

const container: any = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Provider2/>
    </BrowserRouter>,
  </Provider>,
);

reportWebVitals();
