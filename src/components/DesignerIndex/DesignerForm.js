import React, { Component } from 'react'
import '../../styles/Form.css'
import {addDesigners} from '../../utils/requests'

class DesignerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      company: '',
      contact: '',
      phone: '',
      email: '',
      user_id: ''
    }
  }

  updateDesigner = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  resetNewDesigner() {
    document.getElementsByClassName('add-designer-form')[0].reset()
  }

  addDesigner = (event) => {
    event.preventDefault()
    const company = this.state.company
    const contact = this.state.contact
    const phone = this.formatPhoneNumber(this.state.phone)
    const email = this.state.email
    const user_id = this.props.userId
    addDesigners(company, contact, phone, email, user_id)
      .then(response => response.id)
      .then((id) => this.props.updateAllDesigners(id, company, contact, phone, email, user_id))
      .then(this.resetNewDesigner())
      .catch(error => console.log({ error }))
  }

  formatPhoneNumber(s) {
    var s2 = ("" + s).replace(/\D/g, '');
    var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
  }

  render() {
    return (
      <div className="designer-form">
        <div className="designer-form-top">
          <h4 className="add-designer-header">New Designer</h4>
          <button className="btn btn-danger add-designer-x-btn" onClick={this.props.handleXClick}>X</button>  
        </div>      
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