import React, { Component } from 'react';
import './styles/App.css';
import {getDesigners} from './utils/requests'
import DesignerList from './components/DesignerList'
import DesignerForm from './components/DesignerForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      designers: []
    }
  }

  componentDidMount() {
    getDesigners()
      .then(designers => this.setState({ designers: designers}))
      .catch(error => console.log({ error }))
  }

  updateAllDesigners = (company, contact, email, phone, user_id) => {
    this.setState({ designers: [... this.state.designers, {company, contact, email, phone, user_id} ]})
  }
  
  render() {
    return (
      <div className="App">
        <h3>DESIGNERS</h3>
        <div className="designer-list-form">
          <DesignerList designers={this.state.designers}/>
          <DesignerForm updateAllDesigners={ this.updateAllDesigners } />
        </div>
      </div>
    );
  }
}

export default App;
