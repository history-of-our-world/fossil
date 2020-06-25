import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from "./app/app";
import {Troglodyte} from "./troglodyte-page/troglodyte-page";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          {/*<Troglodyte/>*/}
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);