import React, { Component } from 'react'
import '../styles/DesignerForm.css'
import {addDesigners} from '../utils/requests'

class DesignerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      company: '',
      contact: '',
      phone: '',
      email: '',
      user_id: 2
    }
  }

  updateDesigner = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  resetNewDesigner = () => {
    // this.getElementsByClassName('add-designer-form').reset()
  }

  addDesigner = (event) => {
    event.preventDefault()
    const company = this.state.company
    const contact = this.state.contact
    const phone = this.state.phone
    const email = this.state.email
    const user_id = this.state.email
    addDesigners(company, contact, phone, email, user_id)
      .then(response => console.log(response))
      .then(() => this.props.updateAllDesigners(company, contact, phone, email, user_id))
      .then(this.resetNewDesigner())
      .catch(error => console.log({ error }))
  }


  render() {
    return (
      <div className="designer-form">
        <h4 className="add-designer-header">New Designer</h4>
        <form className="add-designer-form">
          <input
            className="input"
            type="text"
            placeholder="Company"
            onChange={this.updateDesigner.bind(this, 'company')}
          />
          <input
            className="input"
            type="text"
            placeholder="Contact"
            onChange={this.updateDesigner.bind(this, 'contact')}
          />
          <input
            className="input"
            type="text"
            placeholder="Phone"
            onChange={this.updateDesigner.bind(this, 'phone')}
          />
          <input
            className="input"
            type="text"
            placeholder="Email"
            onChange={this.updateDesigner.bind(this, 'email')}
          />
          <button
            className="add-designer-btn"
            onClick={this.addDesigner}
          >
          Create Designer
          </button>
        </form>
      </div>
    )
  }
}

export default DesignerForm