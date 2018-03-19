import React from 'react'
import MaterialIcon from 'material-icons-react';
import '../../../styles/DesignerContactInfo.css'

const DesignerContactInfo = (props) => {
  const designer = props.designer
  return (
    <div className="designer-contact-info">
      <h4>Contact Information:</h4>
        <div className="contact">
          <div className="icons">
            <MaterialIcon icon="person" size={20} />
          </div>
          <p className="designer-contact-name">{ designer.contact }</p>
        </div>
        <div className="phone">
          <div className="icons">
            <MaterialIcon icon="phone" size={20} />
          </div>
          <p className="designer-contact-phone">{ designer.phone }</p>
        </div>
        <div className="email">
          <div className="icons">
            <MaterialIcon icon="mail" size={20} />
          </div>
          <p className="designer-contact-email">{ designer.email }</p>
        </div>
    </div>
  )
}

export default DesignerContactInfo