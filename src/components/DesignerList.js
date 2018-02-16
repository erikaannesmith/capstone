import React from 'react'
import DesignerCard from './DesignerCard'
import '../styles/DesignerList.css'

const createDesignerCards = (designers) => {
  return designers.map((designer) => {
    return (
      <DesignerCard
        key={ designer.id }
        designer={ designer }
      />
    )
  })
}

const DesignerList = (props) => {
  const designers = props.designers.reverse()
  return (
    <div className="designer-list">
      { createDesignerCards(designers) }
    </div>
  )
}

export default DesignerList