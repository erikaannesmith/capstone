import React from 'react'
import StyleCommentCard from './StyleCommentCard'
import '../../styles/Form.css'

const createStyleCommentCard = (userId, comments, props) => {
  return comments.map((comment) => {
    return (
      <StyleCommentCard
        key={ 'style-comment-' + comment.id }
        comment={ comment }
        deleteStyleComment={props.deleteStyleComment}
        removeStyleComment={props.removeStyleComment}
        comments={ props.comments }
        style= {props.style}
        userId = {props.userId}
      />
    )
  })
}

const StyleCommentsList = (props) => {
  const comments = props.comments
  const userId = props.userId
  return (
    <div className="comments-list">
      <h4>Comments</h4>
      { createStyleCommentCard(userId, comments, props) }
    </div>
  )
}

export default StyleCommentsList