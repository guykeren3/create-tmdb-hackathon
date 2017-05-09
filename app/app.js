import 'cssrecipes-defaults/lib/document-remove-margin-padding.css';
import 'cssrecipes-defaults/lib/box-sizing.css';
import 'cssrecipes-defaults/lib/hidden.css';
import 'normalize.css/normalize.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'font-awesome/css/font-awesome.css';

import './assets/styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Root from './components/root/root';
import store from './store';
import HomePage from "./components/home/HomePage";
import movies from "./components/movies/movies";

render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/movies" component={ movies } />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
);

// Enables hot-reload without page refresh. Removed during `build`
if (module.hot) {
  module.hot.accept();
}
