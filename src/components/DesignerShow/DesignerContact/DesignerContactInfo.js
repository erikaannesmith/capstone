import React from 'react'

const DesignerContactInfo = (props) => {
  const designer = props.designer
  return (
    <div className="designer-contact-info">
      <h4>Contact Information:</h4>
        <p className="designer-contact-name">{ designer.contact }</p>
        <p className="designer-contact-phone">{ designer.phone }</p>
        <p className="designer-contact-email">{ designer.email }</p>
    </div>
  )
}

export default DesignerContactInfo