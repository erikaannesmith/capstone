import React from 'react'

const DesignerStyleCard = (props) => {
  const style = props.style
  return (
    <div className='style-row'>
      <p className='style-name'>{ style.name }</p>
      <p className='style-description'>{ style.description }</p>
    </div>
  )
}

export default DesignerStyleCard