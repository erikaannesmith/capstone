import React from 'react'
import DesignerCommentCard from './DesignerCommentCard'

const createDesignerCommentCards = (comments, props) => {
  return comments.map((comment) => {
    return (
      <DesignerCommentCard
        key={'designer-comment-' + comment.id}
        comment={ comment }
        deleteDesignerComment={props.deleteDesignerComment}
        removeDesignerComment={props.removeDesignerComment}
        comments={ props.comments }
      />
    )
  })
}

const DesignerCommentsList = (props) => {
  const comments = props.comments
  return (
    <div className='comments-list'>
      <h4>Comments</h4>
      { createDesignerCommentCards(comments, props) }
    </div>
  )
}

export default DesignerCommentsList
