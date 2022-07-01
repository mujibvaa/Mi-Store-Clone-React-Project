import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard.js"
import "../styling/NavOptions.css"

const NavOptions = ({miPhones,redmiPhones,tv,laptop,fitnessAndLife,home,audio,accssories}) => {
  
  //const[miPhoneToggle,redmiPhoneToggle,tvToggle,laptopToggle,fitnessAndLifeToggle,homeToggle,audioToggle,accssoriesToggle,setstate] = useState(false);
  
    const[miPhoneToggle,setmiPhoneToggle] = useState(false);
    const[redmiPhoneToggle,setredmiPhoneToggle] = useState(false);
    const[tvToggle,settvToggle] = useState(false);
    const[laptopToggle,setlaptopToggle] = useState(false);
    const[fitnessAndLifeToggle,setfitnessAndLifeToggle] = useState(false);
    const[homeToggle,sethomeToggle] = useState(false);
    const[audioToggle,setaudioToggle] = useState(false);
    const[accssoriesToggle,setaccssoriesToggle] = useState(false);
   
    
    useEffect(()=>{

        if(window.location.pathname === "/miphones"){
            return setmiPhoneToggle(true)
        }

        if(window.location.pathname === "/redmiphones"){
            return setredmiPhoneToggle(true)
        }


        if(window.location.pathname === "/tv"){
            return settvToggle(true)
        }

        if(window.location.pathname === "/laptops"){
            return setlaptopToggle(true)
        }

        if(window.location.pathname === "/lifestyle"){
            return setfitnessAndLifeToggle(true)
        }


        if(window.location.pathname === "/home"){
            return sethomeToggle(true)
        }

        if(window.location.pathname === "/radio"){
            return setaudioToggle(true)
        }

        if(window.location.pathname === "/accessories"){
            return setaccssoriesToggle(true)
        }


    },[]
 )


    return (
    <div className='navOptions'>
     { 
        miPhoneToggle? miPhones.map((item)=>(
            < NavCard name ={item.name} price ={item.price} image={item.image} key={item.image}/> 
                   )) : null 


        
                   
     }



{ 
        redmiPhoneToggle? redmiPhones.map((item)=>(
            < NavCard name ={item.name} price ={item.price} image={item.image} key={item.image}/> 
                   )) : null 
                   
     }


{ 
        tvToggle? tv.map((item)=>(
            < NavCard name ={item.name} price ={item.price} image={item.image} key={item.image}/> 
                   )) : null 
                   
     }

{ 
        laptopToggle? laptop.map((item)=>(
            < NavCard name ={item.name} price ={item.price} image={item.image} key={item.image}/> 
                   )) : null 
                   
     }



{ 
        fitnessAndLifeToggle? fitnessAndLife.map((item)=>(
            < NavCard name ={item.name} price ={item.price} image={item.image} key={item.image}/> 
                   )) : null 
                   
     }




{ 
        homeToggle? home.map((item)=>(
            < NavCard name ={item.name} price ={item.price} image={item.image} key={item.image}/> 
                   )) : null 
                   
     }





{ 
        audioToggle? audio.map((item)=>(
            < NavCard name ={item.name} price ={item.price} image={item.image} key={item.image}/> 
                   )) : null 
                   
     }





{ 
        accssoriesToggle? accssories.map((item)=>(
            < NavCard name ={item.name} price ={item.price} image={item.image} key={item.image}/> 
                   )) : null 
                   
     }




    
        
    </div>
  )
}

export default NavOptions