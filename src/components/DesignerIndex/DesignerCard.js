import React from 'react'
import '../../styles/Card.css'
import { Link } from 'react-router-dom'
import Mailto from 'react-protected-mailto'

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
      <Mailto
        email={designer.email}
      />
    </div>
  )
}

export default DesignerCard