import React, { Component } from 'react'
import '../styles/DesignerForm.css'

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

  render() {
    return (
      <div className="designer-form">
        <h4 className="add-designer-header">New Designer</h4>
        <form className="add-designer-form">
          <input
            className="input"
            type="text"
            placeholder="Company"
            // onChange={this.updateFood.bind(this, 'food')}
          />
          <input
            className="input"
            type="text"
            placeholder="Contact"
            // onChange={this.updateFood.bind(this, 'calories')}
          />
          <input
            className="input"
            type="text"
            placeholder="Phone"
          // onChange={this.updateFood.bind(this, 'calories')}
          />
          <input
            className="input"
            type="text"
            placeholder="Email"
          // onChange={this.updateFood.bind(this, 'calories')}
          />
          <button
            className="add-designer-btn"
            // onClick={this.addFood}
          >
          Create Designer
          </button>
        </form>
      </div>
    )
  }
}

export default DesignerForm