import React, { Component } from 'react'
import {getDesigner, getStyles, getDesignerComments, deleteDesignerComment} from '../../utils/requests'
import DesignerContactInfo from './DesignerContact/DesignerContactInfo'
import DesignerStylesList from './DesignerStyle/DesignerStylesList'
import DesignerStyleForm from './DesignerStyle/DesignerStyleForm'
import DesignerCommentsList from './DesignerComment/DesignerCommentsList'
import DesignerCommentsForm from './DesignerComment/DesignerCommentsForm'
import DesignerContactEditForm from './DesignerContact/DesignerContactEditForm'
import '../../styles/DesignerShow.css'
import SearchInput, { createFilter } from 'react-search-input'
import '../../styles/NavBar.css'
import { Link } from 'react-router-dom'
import MaterialIcon from 'material-icons-react';

const STYLE_KEYS_TO_FILTERS = ['name', 'description']


class DesignerShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      designer: null,
      styles: [],
      comments: [],
      styleSearchTerm: '',
    }
    this.handleClick = this.handleClick.bind(this);    
    this.handleXClick = this.handleXClick.bind(this);        
    this.styleSearchUpdated = this.styleSearchUpdated.bind(this)    
  }

  componentDidMount() {
    let userId = this.props.location.state.user
    let id = this.props.match.params.id
    getDesigner(userId, id)
      .then(designer => this.setState({ designer }))
      .catch(error => console.log({ error }))      
    getStyles(userId, id)
      .then(styles => this.setState({ styles }))
      .catch(error => console.log({ error }))
    getDesignerComments(userId, id)
      .then(comments => this.setState({ comments }))
      .catch(error => console.log({ error }))
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({
      showComponent: true,
    });
  }

  handleXClick(event) {
    event.preventDefault()
    this.setState({
      showComponent: false,
    });
  }

  updateAllDesignerStyles = (id, name, description, designer_id) => {
    this.setState({ styles: [...this.state.styles, { id, name, description, designer_id }] })
  }

  updateAllDesignerComments = (id, date, body, designer_id) => {
    this.setState({ comments: [...this.state.comments, { id, date, body, designer_id } ]})
  }

  deleteDesignerComment = (userId, item, props) => {
    let commentId = item.id
    let designerId = item.designer_id
    deleteDesignerComment(userId, commentId, designerId)
      .then(() => this.updateDesignerCommentsAfterRemove(props.comments, commentId))
      .catch(error => console.log({error}))
  }
  
  updateDesignerCommentsAfterRemove = (comments, commentId) => {
    let oldComments = comments
    let newComments = oldComments.filter(function (el) {
      return el.id !== commentId;
    })
    this.setState({comments: newComments})
  }

  styleSearchUpdated(term) {
    this.setState({ styleSearchTerm: term })
  }

  editDesignerContact = (key, event) => {
    this.setState({ designer: { ...this.state.designer, [key]: event.target.value } })
  }

  render() {
    let designer = this.state.designer
    let comments = this.state.comments
    let user = this.props.location.state.user
    const filteredStyles = this.state.styles.filter(createFilter(this.state.styleSearchTerm, STYLE_KEYS_TO_FILTERS))    
    if (!designer) return null
    return (
      <div className="designer-show">
        <div className="nav-bar">
          <Link className="home-btn" to={'/'}>
            <MaterialIcon icon="home" size={30} />
          </Link>
        </div>
        <h3>{ designer.company.toUpperCase() }</h3>
        <div className="designer-contact">
          <DesignerContactInfo designer={designer} />
          <button className="btn btn-default" onClick={this.handleClick}>Edit Contact</button>
          {this.state.showComponent ?
            <DesignerContactEditForm user={user} handleXClick={this.handleXClick} editDesignerContact={this.editDesignerContact} designer={designer} /> :
            null
          }
        </div>
        <div className="designer-styles">
          <DesignerStylesList designer={designer} user={user} styles={filteredStyles} styleSearchUpdated={this.styleSearchUpdated}/>
          <DesignerStyleForm updateAllDesignerStyles={this.updateAllDesignerStyles} designer={designer}/>
        </div>
        <div className="designer-comments">
          <DesignerCommentsList 
            user={user}
            deleteDesignerComment={this.deleteDesignerComment}
            removeDesignerComment={this.removeDesignerComment}
            comments={comments}/>
          <DesignerCommentsForm user={user} updateAllDesignerComments={this.updateAllDesignerComments} designer={ designer }/>
        </div>
      </div>
    )
  }
}

export default DesignerShow;