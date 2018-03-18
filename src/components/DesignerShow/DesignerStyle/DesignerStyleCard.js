import React from 'react'
import '../../../styles/Card.css'
import { Link } from 'react-router-dom'

const DesignerStyleCard = (props) => {
  const style = props.style
  let user = props.user
  return (
    <div className='style-row'>
    <Link to={{pathname:`/designers/${style.designer_id}/styles/${style.id}`, state: {user}}}>
      <p className='style-name'>{ style.name }</p>
    </Link>
      <p className='style-description'>{ style.description }</p>
    </div>
  )
}

export default DesignerStyleCard