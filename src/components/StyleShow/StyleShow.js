import React, { Component } from 'react'
import {getStyle, getStyleComments, deleteStyleComment} from '../../utils/requests'
import StyleCommentsList from './StyleCommentsList'
import StyleCommentsForm from './StyleCommentsForm'
import '../../styles/StyleShow.css'
import '../../styles/NavBar.css'
import { Link } from 'react-router-dom'
import MaterialIcon from 'material-icons-react';

class StyleShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style: [],
      comments: []
    }
  }

  componentDidMount() {
    let userId = this.props.location.state.user
    let designerId = this.props.location.pathname.split('/')[2]
    let styleId = this.props.match.params.id
    getStyle(userId, designerId, styleId)
      .then(style => this.setState({ style }))
      .catch(error => console.log({ error }))
    getStyleComments(userId, designerId, styleId)
      .then(comments => this.setState({ comments }))
      .catch(error => console.log({ error }))
  }

  updateAllStyleComments = (id, date, body, style_id) => {
    this.setState({ comments: [...this.state.comments, {id, date, body, style_id}] })
  }

  deleteStyleComment = (userId, item, props) => {
    let commentId = item.id
    let styleId = props.style.id
    let designerId = props.style.designer_id
    deleteStyleComment(userId, commentId, designerId, styleId)
      .then(() => this.updateStyleCommentsAfterRemove(props.comments, commentId))
      .catch(error => console.log({error}))
  }

  updateStyleCommentsAfterRemove = (comments, commentId) => {
    let oldComments = comments
    let newComments = oldComments.filter(function (el) {
      return el.id !== commentId;
    })
    this.setState({ comments: newComments })
  }

  render() {
    let style = this.state.style
    let comments = this.state.comments
    let userId = this.props.location.state.user
    return (
      <div className="style-show">
        <div className="nav-bar">
          <Link className="home-btn" to={'/'}>
            <MaterialIcon icon="home" size={30} />
          </Link>
          {/* <Link className="prev-designer-btn" to={{pathname:`/designers/` + style.designer_id, state: {userId}}}>
            <MaterialIcon icon="arrow_back" size={30} />
          </Link> */}
        </div>
        <h3>{ style.name }</h3>
        <span>{ style.description }</span>
        <div className='style-comments'>
          <StyleCommentsList 
            deleteStyleComment={this.deleteStyleComment}
            removeStyleComment={this.removeStyleComment}
            comments={ comments }
            style={ style }
            userId={ userId }
          />
          <StyleCommentsForm userId={userId} updateAllStyleComments={ this.updateAllStyleComments } style={ style }/>
        </div>
      </div>
    )
  }
}

export default StyleShow;