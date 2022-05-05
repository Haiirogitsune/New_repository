import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index path="/home" element={<div></div>} />
          <Route index path="/about" element={<div></div>} />
          <Route index path="/type" element={<div></div>} />
          <Route index path="/contact" element={<div></div>} />
        </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
