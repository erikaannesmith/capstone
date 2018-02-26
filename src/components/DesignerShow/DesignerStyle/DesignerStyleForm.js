import React, { Component } from 'react'
import '../../../styles/Form.css'
import {addDesignerStyles} from '../../../utils/requests'

class DesignerStyleForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '', 
      description: '',
      designer_id: props.designer.id
    }
  }
  
  updateDesignerStyle = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  resetNewStyle() {
    document.getElementsByClassName('add-designer-style-form')[0].reset()    
  }

  addDesignerStyle = (event) => {
    event.preventDefault()
    const name = this.state.name
    const description = this.state.description
    const designer_id = this.props.designer.id
    addDesignerStyles(name, description, designer_id)
      .then((response) => this.props.updateAllDesignerStyles(response.id, name, description, response.designer_id))
      .then(this.resetNewStyle())
      .catch(error => console.log({ error }))
  }

  render() {
    return (
      <div className="designer-style-form">
        <h4 className="add-designer-style-header">New Style</h4>
        <form className="add-designer-style-form">
          <input
            className="input"
            type="text"
            placeholder="Name"
            onChange={this.updateDesignerStyle.bind(this, 'name')}
          />
          <input
            className="input"
            type="text"
            placeholder="Description"
            onChange={this.updateDesignerStyle.bind(this, 'description')}
          />
          <button
            className="add-designer-style-btn"
            onClick={this.addDesignerStyle.bind(this)}
          >
            Create Style
          </button>
        </form>
      </div>
    )
  }
}

export default DesignerStyleForm