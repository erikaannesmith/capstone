import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from '../App'
import DesignerShow from './DesignerShow/DesignerShow'
import StyleShow from './StyleShow/StyleShow'

const Routes = (props) => {
  return (
    <Switch>
      <Route path='/designers/:id/styles/:id' component={StyleShow} />      
      <Route path='/designers/:id' component={DesignerShow} />
      <Route exact path='/' component={App} />
    </Switch>
  )
}

export default Routes