import React from 'react'
import DesignerStyleCard from './DesignerStyleCard'
import '../../../styles/Form.css'
import SearchInput from 'react-search-input'

const createDesignerStyleCards = (styles, user, designer) => {
  return styles.map((style) => {
    return (
      <DesignerStyleCard
        key={'designer-style-' + style.id}
        style={ style }
        user={user}
        designer={designer}
      />
    )
  })
}

const DesignerStylesList = (props) => {
  const designer = props.designer
  const user = props.user
  const styles = props.styles
  return (
    <div className='styles-list'>
      <h4>Styles</h4>
      <SearchInput className="search-input" onChange={props.styleSearchUpdated} />        
      { createDesignerStyleCards(styles, user) }
    </div>
  )
}

export default DesignerStylesList