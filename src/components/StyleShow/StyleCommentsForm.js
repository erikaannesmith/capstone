import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'moment-timezone'
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/Form.css'
import { addStyleComments } from '../../utils/requests'

class StyleCommentsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: moment(),
      body: '',
      style_id: props.style.id
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      date: date
    })
  }

  updateStyleComment = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  addStyleComment = (event) => {
    event.preventDefault()
    const date = this.state.date.toString().slice(0, -9)
    const body = this.state.body
    const style_id = this.props.style.id
    const designer_id = this.props.style.designer_id
    addStyleComments(date, body, style_id, designer_id)
      .then((response) => this.props.updateAllStyleComments(response.id, date, body, style_id))
      .catch(error => console.log({ error }))
  }

  render() {
    return (
      <div className="style-comment-form">
        <h4 className="add-style-comment-header">New Comment</h4>
        <form className="add-style-comment-form">
          <DatePicker
            selected={this.state.date}
            onChange={this.handleChange.bind(this)}
          />
          <input
            className="input"
            type="text"
            placeholder="Body"
            onChange={this.updateStyleComment.bind(this, 'body')}
          />
          <button
            className="add-style-comment-btn"
            onClick={this.addStyleComment.bind(this)}
          >
            Create Comment
          </button>
        </form>
      </div>
    )
  }
}

export default StyleCommentsForm