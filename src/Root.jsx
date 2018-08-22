import React from "react"
import { Route, Switch } from "react-router-dom"
import App from "./pages/App"

class Root extends React.Component {
  render() {
    return (
			<Switch>
        <Route path="/" component={App} />
      </Switch>
    )
  }
}

export default Root
