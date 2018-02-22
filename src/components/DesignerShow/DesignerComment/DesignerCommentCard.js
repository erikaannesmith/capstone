import React from 'react'
import '../../../styles/Card.css'
import Moment from 'react-moment';
import 'moment-timezone';
import MaterialIcon from 'material-icons-react';

const DesignerCommentCard = (props) => {
  const comment = props.comment
  const dateToFormat = comment.date
  return (
    <div className='comment-row'>
      <div className='designer-comment-top'>
        <p className='comment-date'><Moment format="MM/DD/YYYY">{ dateToFormat }</Moment></p>
        <button className="delete-designer-comment"
          onClick={() => props.deleteDesignerComment(comment, props)}
          >
          <MaterialIcon className="delete-comment-btn" icon="close" size={15} />
        </button>
      </div>
      <p className='comment-body'>{ comment.body }</p>
    </div>
  ) 
}


export default DesignerCommentCard