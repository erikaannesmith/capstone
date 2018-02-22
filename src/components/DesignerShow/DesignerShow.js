import React, { Component } from 'react'
import {getDesigner, getStyles, getDesignerComments, deleteDesignerComment} from '../../utils/requests'
import DesignerContactInfo from './DesignerContact/DesignerContactInfo'
import DesignerStylesList from './DesignerStyle/DesignerStylesList'
import DesignerStyleForm from './DesignerStyle/DesignerStyleForm'
import DesignerCommentsList from './DesignerComment/DesignerCommentsList'
import DesignerCommentsForm from './DesignerComment/DesignerCommentsForm'
import '../../styles/DesignerShow.css'


class DesignerShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      designer: [],
      styles: [],
      comments: []
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    getDesigner(id)
      .then(designer => this.setState({ designer }))
      .catch(error => console.log({ error }))      
    getStyles(id)
      .then(styles => this.setState({ styles }))
      .catch(error => console.log({ error }))
    getDesignerComments(id)
      .then(comments => this.setState({ comments }))
      .catch(error => console.log({ error }))
  }

  updateAllDesignerStyles = (id, name, description, designer_id) => {
    this.setState({ styles: [...this.state.styles, { id, name, description, designer_id }] })
  }

  updateAllDesignerComments = (id, date, body, designer_id) => {
    this.setState({ comments: [...this.state.comments, { id, date, body, designer_id } ]})
  }

  deleteDesignerComment = (item, props) => {
    let commentId = item.id
    let designerId = item.designer_id
    deleteDesignerComment(commentId, designerId)
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

  render() {
    let designer = this.state.designer
    let styles = this.state.styles
    let comments = this.state.comments
    return (
      <div className="designer-show">
        <h3>{ designer.company }</h3>
        <DesignerContactInfo designer={designer} />
        <div className="designer-styles">
          <DesignerStylesList styles={styles} />
          <DesignerStyleForm updateAllDesignerStyles={this.updateAllDesignerStyles} designer={designer}/>
        </div>
        <div className="designer-comments">
          <DesignerCommentsList 
            deleteDesignerComment={this.deleteDesignerComment}
            removeDesignerComment={this.removeDesignerComment}
            comments={comments}/>
          <DesignerCommentsForm updateAllDesignerComments={this.updateAllDesignerComments} designer={ designer }/>
        </div>
      </div>
    )
  }
}

export default DesignerShow;