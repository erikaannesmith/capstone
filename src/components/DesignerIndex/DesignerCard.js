import React from 'react'
import '../../styles/Card.css'
import { Link } from 'react-router-dom'
import Mailto from 'react-protected-mailto'
import MaterialIcon from 'material-icons-react';

const DesignerCard = (props) => {
  const designer = props.designer
  const user = props.user
  return (
    <div className="designer-row">
      <Link to={{pathname:`/designers/${designer.id}`, state: {user}}}>
        <p className="designer-company">{ designer.company.toUpperCase() }</p>
      </Link>
      <div className="contact-info">
        <p className="designer-contact">{ designer.contact }</p>
        <p className="dot">•</p>
        <div className="icons">
          <MaterialIcon icon="phone" size={20} />
        </div>
        <p className="designer-phone">{ designer.phone }</p>
      </div>
      <div className="email">
        <div className="icons">
          <MaterialIcon icon="mail" size={20} />
        </div>
        <Mailto className="designer-email"
          email={designer.email}
        />
      </div>
    </div>
  )
}

export default DesignerCard