import React from 'react'
import Moment from 'react-moment';
import 'moment-timezone';
import MaterialIcon from 'material-icons-react';
import '../../styles/Card.css'

const StyleCommentCard = (props) => {
  const comment = props.comment
  const dateToFormat = comment.date
  const userId = props.userId
  return (
    <div className='comment-row'>
      <div className='style-comment-top'>
        <p className='comment-date'><Moment format="MM/DD/YYYY">{dateToFormat}</Moment></p>
        <button className="delete-style-comment"
          onClick={() => props.deleteStyleComment(userId, comment, props)}
        >
          <MaterialIcon className="delete-comment-btn" icon="close" size={15} />
        </button>
      </div>
      <p className='comment-body'>{comment.body}</p>
    </div>
  )
}

export default StyleCommentCard