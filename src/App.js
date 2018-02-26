import React, { Component } from 'react';
import './styles/App.css';
import {getDesigners} from './utils/requests'
import DesignerList from './components/DesignerIndex/DesignerList'
import DesignerForm from './components/DesignerIndex/DesignerForm'
import SearchInput, { createFilter } from 'react-search-input'

const KEYS_TO_FILTERS = ['company', 'contact', 'phone', 'email']

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      designers: [],
      searchTerm: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  componentDidMount() {
    getDesigners()
      .then(designers => this.setState({ designers: designers}))
      .catch(error => console.log({ error }))
  }

  updateAllDesigners = (id, company, contact, phone, email, user_id) => {
    this.setState({ designers: [...this.state.designers, { id, company, contact, phone, email, user_id } ]})
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({
      showComponent: true,
    });
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
 
  render() {
    let filteredDesigners;
    if (this.state.designers.length === 0) {
      filteredDesigners = this.state.designers
    } else {
      filteredDesigners = this.state.designers.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    }
    return (
      <div className="App">
        <div className="app-headers">
          <h3>DESIGNERS</h3>
          <button onClick={this.handleClick}>+</button>
        </div>
        <div className="designer-list-form">
          {this.state.showComponent ?
            <DesignerForm state={this.state} updateAllDesigners={this.updateAllDesigners} /> :
            null
          }
          <SearchInput className="search-input" onChange={this.searchUpdated} />
          <DesignerList designers={filteredDesigners} />
        </div>
      </div>
    );
  }
}

export default App;
