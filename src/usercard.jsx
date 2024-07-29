import React from 'react'

const Usercard = (props) => {
  return (
    <div className='user-card'>
      <h2>{props.name}</h2>
      <h4>{props.age}</h4>
    </div>
  )
}

export default Usercard
