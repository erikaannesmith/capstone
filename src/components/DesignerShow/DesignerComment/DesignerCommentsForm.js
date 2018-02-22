import React, { Component } from 'react'
import { addDesignerComments } from '../../../utils/requests'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'moment-timezone'
import 'react-datepicker/dist/react-datepicker.css';


class DesignerCommentsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: moment(),
      body: '',
      designer_id: props.designer.id
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      date: date
    });
  }

  updateDesignerComment = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  addDesignerComment = (event) => {
    event.preventDefault()
    const date = this.state.date.toString().slice(0, -9)
    const body = this.state.body
    const designer_id = this.props.designer.id
    addDesignerComments(date, body, designer_id)
      .then((response) => this.props.updateAllDesignerComments(response.id, date, body, designer_id))
      .catch(error => console.log({ error }))
  }

  render() {
    return (
      <div className="designer-comment-form">
        <h4 className="add-designer-comment-header">New Comment</h4>
        <form className="add-designer-comment-form">
          <DatePicker
            selected={this.state.date}
            onChange={this.handleChange.bind(this)}
          />
          <input
            className="input"
            type="text"
            placeholder="Body"
            onChange={this.updateDesignerComment.bind(this, 'body')}
          />
          <button
            className="add-designer-comment-btn"
            onClick={this.addDesignerComment.bind(this)}
          >
            Create Comment
          </button>
        </form>
      </div>
    )
  }
}

export default DesignerCommentsForm