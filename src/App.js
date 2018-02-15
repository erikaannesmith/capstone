import React, { Component } from 'react';
import './styles/App.css';
import {getUsers, getDesigners} from './utils/requests'
import UserList from './components/UserList'
import DesignerList from './components/DesignerList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // users: []
      designers: []
    }
  }

  componentDidMount() {
    getDesigners()
      // .then(users => this.setState({ users: users }))
      .then(designers => this.setState({ designers: designers}))
      .catch(error => console.log({ error }))
  }
  
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {/* <Main /> */}
        <h3>DESIGNERS</h3>
        <DesignerList designers={this.state.designers}/>
      </div>
    );
  }
}

export default App;
