import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './pages/App'

if (module.hot) {
  module.hot.accept(() => {
    render(App);
  })
}

render(App);

function render(Component, onRender) {
  if (!onRender) { onRender = function() {}; }

  if (window) {
    ReactDom.render(
      <AppContainer>
            <Component/>
      </AppContainer>,
      document.getElementById('root'),
      onRender
    );
  }
}