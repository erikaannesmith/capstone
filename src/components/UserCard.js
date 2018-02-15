import React from 'react';

const UserCard = (props) => {
  const user = props.user
  return (
    <div className="user-row">
      <p className="user-email">{ user.email }</p>
      <p className="user-company">{ user.company }</p>
    </div>
  )
}

export default UserCard