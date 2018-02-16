import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from '../App'
import DesignerShow from './DesignerShow'

const Routes = (props) => {
  console.log(props)
  return (
    <Switch>
      <Route path='/designers/:id' component={DesignerShow} />
      <Route exact path='/' component={App} />
    </Switch>
  )
}

export default Routes