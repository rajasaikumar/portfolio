import React from 'react'

const Fragements = () => {
    const items = ['item1' ,'item2','item3'] ;

  return (
    <div>
      {items.map((item ,index)=>(
        <span key ={index}>{item}</span>
      ))}
    </div>
  )
}

export default Fragements ;
