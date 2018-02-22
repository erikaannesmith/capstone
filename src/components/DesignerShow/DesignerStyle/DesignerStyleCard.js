import React from 'react'
import '../../../styles/Card.css'
import { Link } from 'react-router-dom'

const DesignerStyleCard = (props) => {
  const style = props.style
  return (
    <div className='style-row'>
    <Link to={`/designers/${style.designer_id}/styles/${style.id}`}>
      <p className='style-name'>{ style.name }</p>
    </Link>
      <p className='style-description'>{ style.description }</p>
    </div>
  )
}

export default DesignerStyleCard