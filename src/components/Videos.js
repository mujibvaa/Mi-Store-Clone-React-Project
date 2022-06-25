import React from 'react'
import VideoCard from "./VideoCard.js"
import "../styling/Videos.css"



const Videos = ({videos}) => {
  return (
    <div className='videos'>
    
   {
        videos.map((item,index)=>(
            <VideoCard index={index} image={item.image} name ={item.name}/>

        ) )



   }

    </div>
  )
}

export default Videos