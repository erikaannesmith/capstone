import React from 'react'
import StyleCommentCard from './StyleCommentCard'
import '../../styles/Form.css'

const createStyleCommentCard = (comments, props) => {
  return comments.map((comment) => {
    return (
      <StyleCommentCard
        key={ 'style-comment-' + comment.id }
        comment={ comment }
        deleteStyleComment={props.deleteStyleComment}
        removeStyleComment={props.removeStyleComment}
        comments={ props.comments }
        style= {props.style}
      />
    )
  })
}

const StyleCommentsList = (props) => {
  const comments = props.comments
  return (
    <div className="comments-list">
      <h4>Comments</h4>
      { createStyleCommentCard(comments, props) }
    </div>
  )
}

export default StyleCommentsList