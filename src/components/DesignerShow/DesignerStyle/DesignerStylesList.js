import React from 'react'
import DesignerStyleCard from './DesignerStyleCard'
import '../../../styles/Form.css'
import SearchInput from 'react-search-input'

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
      <h4>Styles</h4>
      <SearchInput className="search-input" onChange={props.styleSearchUpdated} />        
      { createDesignerStyleCards(styles) }
    </div>
  )
}

export default DesignerStylesList