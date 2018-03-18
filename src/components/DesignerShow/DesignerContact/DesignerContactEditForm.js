import React, { Component } from 'react'
import {updateDesignerContact} from '../../../utils/requests'
import '../../../styles/Form.css'

class DesignerContactEditForm extends Component {
  updateDesignerContact = (event) => {
    event.preventDefault()
    const userId = this.props.user
    const company = this.props.designer.company
    const contact = this.props.designer.contact
    const phone = this.formatPhoneNumber(this.props.designer.phone)
    const email = this.props.designer.email
    const designerId = this.props.designer.id
    updateDesignerContact(userId, company, contact, phone, email, designerId)
      .catch(error => console.log({error}))
  }

  formatPhoneNumber(s) {
    var s2 = ("" + s).replace(/\D/g, '');
    var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
  }

  editDesignerContact = (key, value) => {
    this.props.editDesignerContact(key, value)
  }

  render() {
    let designer = this.props.designer
    if (!designer) return null
    
    return (
      <div className="designer-contact-edit-form">
        <div className="designer-contact-edit-top">
          <h4 className="edit-designer-contact-header">Edit Contact</h4>
          <button className="designer-contact-x-btn btn btn-danger" onClick={this.props.handleXClick}>X</button> 
        </div>      
        <form className="edit-designer-contact-form">
          <input
            className="input"
            type="text"
            placeholder="Company"
            defaultValue={designer.company}              
            onChange={this.editDesignerContact.bind(this, 'company')}
          />
          <input
            className="input"
            type="text"
            placeholder="Contact"
            defaultValue={designer.contact}
            onChange={this.editDesignerContact.bind(this, 'contact')}
          />
          <input
            className="input"
            type="text"
            placeholder="Phone"
            defaultValue={designer.phone}              
            onChange={this.editDesignerContact.bind(this, 'phone')}
          />
          <input
            className="input"
            type="text"
            placeholder="Email"
            defaultValue={designer.email}              
            onChange={this.editDesignerContact.bind(this, 'email')}
          />
          <button
            className="edit-designer-contact-btn"
            onClick={this.updateDesignerContact.bind(this)}
          >
            Save Contact
        </button>
        </form>
      </div>
    )
  }
}

export default DesignerContactEditForm