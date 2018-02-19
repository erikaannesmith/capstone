import React from 'react'
import DesignerStyleCard from './DesignerStyleCard'

const createDesignerStyleCards = (styles) => {
  return styles.map((style) => {
    return (
      <DesignerStyleCard
        key={'designer-style-' + style.id}
        style={ style }
      />
    )
  })
}

const DesignerStylesList = (props) => {
  const styles = props.styles
  return (
    <div className='styles-list'>
      { createDesignerStyleCards(styles) }
    </div>
  )
}

export default DesignerStylesList