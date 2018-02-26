import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from '../App'
import DesignerShow from './DesignerShow/DesignerShow'
import StyleShow from './StyleShow/StyleShow'
import Login from './Login'

const Routes = (props) => {
  return (
    <Switch>
      <Route path='/designers/:id/styles/:id' component={StyleShow} />      
      <Route path='/designers/:id' component={DesignerShow} />
      <Route exact path='/designers' component={App} />
      <Route exact path='/' component={Login}/>
    </Switch>
  )
}

export default Routes