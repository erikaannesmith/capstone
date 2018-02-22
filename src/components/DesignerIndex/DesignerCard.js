import React from 'react'
import '../../styles/Card.css'
import { Link } from 'react-router-dom'

const DesignerCard = (props) => {
  const designer = props.designer
  return (
    <div className="designer-row">
      <Link to={`/designers/${designer.id}`}>
        <p className="designer-company">{ designer.company.toUpperCase() }</p>
      </Link>
      <div className="contact-info">
        <p className="designer-contact">{ designer.contact }</p>
        <p>•</p>
        <p className="designer-phone">{ designer.phone }</p>
      </div>
      <p className="designer-email">{ designer.email }</p>
    </div>
  )
}

export default DesignerCard