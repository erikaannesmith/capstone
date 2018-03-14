import React from 'react'
import DesignerCard from './DesignerCard'
import '../../styles/DesignerList.css'

const createDesignerCards = (user, designers) => {
  return designers.map((designer) => {
    return (
      <DesignerCard
        user={user}
        key={'designer-' + designer.id}
        designer={ designer }
      />
    )
  })
}

const DesignerList = (props) => {
  const user = props.user
  const designers = props.designers
  return (
    <div className="designer-list">
      { createDesignerCards(user, designers) }
    </div>
  )
}

export default DesignerList