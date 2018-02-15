import React from 'react'
import DesignerCard from './DesignerCard'

const createDesignerCards = (designers) => {
  return designers.map((designer) => {
    return (
      <DesignerCard
        key={ designer.id}
        designer={ designer }
      />
    )
  })
}

const DesignerList = (props) => {
  const designers = props.designers
  return (
    <div>
      { createDesignerCards(designers) }
    </div>
  )
}

export default DesignerList