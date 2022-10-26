import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({stars}) => {
  
  const star = Array.from({length : 5}, (_ , index) => {
    return ( 
      <span className=' text-main my-3' key={index}>
        {
          stars >= index + 1 ? 
          <BsStarFill />
          : stars >= index + 0.5 ?
          <BsStarHalf />
          :
          <BsStar />
        }
      </span>
    )
  })

  return (
    <div className='flex'>{star}</div>
  )
}

export default Stars