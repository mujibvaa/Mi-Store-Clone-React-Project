import React from 'react'
import HotItemCard from "./HotItemCard.js"
import "../styling/HotGadget.css"

const HotGadget = ({music,musicCover,smartDevice,smartCover,home,homeCover, lifestyle, lyfCover, mobileacc,mobileaccCover}) => {
  return (
    <div className='HotGadget'>

        <div>
           <img src={musicCover || smartCover || homeCover || lyfCover || mobileaccCover } alt= "Cover"/>
        </div>

        <div> 
            {music && music.map((item,index)=> (
            <HotItemCard key = {item.image} name={item.name} price= {item.price} image={item.image} index={index} /> ))} 
        
            {smartDevice && smartDevice.map((item,index)=> (
            <HotItemCard key = {item.image} name={item.name} price= {item.price} image={item.image} index={index} /> ))} 

            {home && home.map((item,index)=> (
            <HotItemCard key = {item.image} name={item.name} price= {item.price} image={item.image} index={index} /> ))} 

            {lifestyle && lifestyle.map((item,index)=> (
            <HotItemCard key = {item.image} name={item.name} price= {item.price} image={item.image} index={index} /> ))} 

            {mobileacc && mobileacc.map((item,index)=> (
            <HotItemCard key = {item.image} name={item.name} price= {item.price} image={item.image} index={index} /> ))} 

            <HotItemCard image={"https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"} />
        </div>

        

    </div>




  )
}

export default HotGadget