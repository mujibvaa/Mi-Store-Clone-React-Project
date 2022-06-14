import React from 'react'
import { Link } from 'react-router-dom'
import "../styling/HotGadgetMenu.css"

const HotGadgetMenu = () => {
  return (
    <div className='hotgadgetmenu'>

        <Link className='HotGadgetLink' to={"/music"}>Music Store</Link>
        <Link className='HotGadgetLink' to={"/smartdevice"}>Smart Device</Link>
        <Link className='HotGadgetLink' to={"/home"}>Home</Link>
        <Link className='HotGadgetLink' to={"/lifestyle"}>Lifestyle</Link>
        <Link className='HotGadgetLink' to={"/mobileacc"}>Mobile Accessories</Link>
        

    </div>
  )
}

export default HotGadgetMenu