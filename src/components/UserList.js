import React from 'react';
import UserCard from './UserCard'

const createUserCards = (users) => {
  return users.map((user) => {
    return (
      <UserCard 
        key={ user.id }
        user={ user }
      />
    )
  })
}

const UserList = (props) => {
  const users = props.users
  return (
    <div>
      { createUserCards(users) }
    </div>
  )
}

export default UserList