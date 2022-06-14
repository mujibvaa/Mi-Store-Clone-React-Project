import React from 'react'
import "../styling/StarProducts.css"

const StarProducts = ({starProduct}) => {
  return (
    <div className='starproduct'>

        <div> <a href={starProduct[0].url}> <img src={starProduct[0].image} alt ="1st product"/> </a></div>
        
        <div>
            <a href={starProduct[1].url}> <img src={starProduct[1].image} alt ="2nd Image"/></a>
            <a href={starProduct[2].url}> <img src={starProduct[2].image} alt="3rd Image"/></a>
            <a href={starProduct[3].url}> <img src={starProduct[3].image} alt= "4th Image"/></a>

        </div>
        
    </div>
  )
}

export default StarProducts