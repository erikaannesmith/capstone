import React from 'react'

const DesignerCard = (props) => {
  const designer = props.designer
  return (
    <div className="designer-row">
      <p className="designer-company">{ designer.company }</p>
      <p className="designer-contact">{ designer.contact }</p>
      <p className="designer-phone">{ designer.phone }</p>
      <p className="designer-email">{ designer.email }</p>
    </div>
  )
}

export default DesignerCard