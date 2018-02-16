import React from 'react'
import '../styles/DesignerCard.css'

const DesignerCard = (props) => {
  const designer = props.designer
  return (
    <div className="designer-row">
      <p className="designer-company">{ designer.company.toUpperCase() }</p>
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