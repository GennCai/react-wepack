import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import history from './utils/history'
import Root from './Root'

const mountNode = document.getElementById("root")

const MainAPP = () => (
  <BrowserRouter history={history}>
    <Root />
  </BrowserRouter>
)

if (process.env.NODE_ENV === "development") {
  const render = Component => {
    ReactDom.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      mountNode,
    )
  }

  render(MainAPP)
  // webpack Hot Module Replacement API
  if (module.hot) {
    module.hot.accept(() => {
      render(MainAPP)
    })
  } 
} else {
  ReactDom.render(<MainAPP />, mountNode)
}
