import React from 'react'
import "../styling/PreNavBar.css"



const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14.35 43.95Q12.85 43.95 11.8 42.9Q10.75 41.85 10.75 40.35Q10.75 38.85 11.8 37.8Q12.85 36.75 14.35 36.75Q15.8 36.75 16.875 37.8Q17.95 38.85 17.95 40.35Q17.95 41.85 16.9 42.9Q15.85 43.95 14.35 43.95ZM34.35 43.95Q32.85 43.95 31.8 42.9Q30.75 41.85 30.75 40.35Q30.75 38.85 31.8 37.8Q32.85 36.75 34.35 36.75Q35.8 36.75 36.875 37.8Q37.95 38.85 37.95 40.35Q37.95 41.85 36.9 42.9Q35.85 43.95 34.35 43.95ZM11.75 10.95 17.25 22.35H31.65Q31.65 22.35 31.65 22.35Q31.65 22.35 31.65 22.35L37.9 10.95Q37.9 10.95 37.9 10.95Q37.9 10.95 37.9 10.95ZM10.25 7.95H39.7Q41.3 7.95 41.725 8.925Q42.15 9.9 41.45 11.1L34.7 23.25Q34.2 24.1 33.3 24.725Q32.4 25.35 31.35 25.35H16.2L13.4 30.55Q13.4 30.55 13.4 30.55Q13.4 30.55 13.4 30.55H37.95V33.55H13.85Q11.75 33.55 10.825 32.15Q9.9 30.75 10.85 29L14.05 23.1L6.45 7H2.55V4H8.4ZM17.25 22.35H31.65Q31.65 22.35 31.65 22.35Q31.65 22.35 31.65 22.35Z"/></svg>
const PreNavBar = () => {
  return (

    <div className="preNav">

      <div>
        
        <a href="#">VAA BD </a> <span>|</span>
        <a href="#">DOWNLOAD VAA APP </a> <span>|</span>
        <a href="#">ONLINE HELP </a> <span>|</span>
        <a href="#">RETAIL STORE</a> <span>|</span>

      </div>

 
      <div>
        
        <a href="#">SIGN IN </a> <span>|</span>
        <a href="#">SIGN UP </a> <span>|</span>
        <a href="#">{cartIcon}CART(0) </a> <span>|</span>
     

      </div>







    </div>


  
  )
}

export default PreNavBar