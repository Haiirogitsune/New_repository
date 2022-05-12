import {
  BrowserRouter
} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Provider from "./components/Provider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider/>
    </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
