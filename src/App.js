import './App.css';
import PreNavBar from './components/PreNavBar';
import NavBar from "./components/NavBar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StartProducts from "./components/StarProducts.js"
import HotGadgetMenu from "./components/HotGadgetMenu.js"
import HotGadget from "./components/HotGadget.js"


function App() {


  return (

    <Router>
      <PreNavBar/>
      <NavBar/> 
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text ="STAR PRODUCTS"/>
      <StartProducts starProduct = {data.starProduct} />
      <Heading text ="HOT GADGETS"/>
      <HotGadgetMenu/>

      <Routes>
        <Route exact path='/music' element= {<HotGadget music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} >
       </Route>
      </Routes>

        
    
 
    </Router>
   

  );
}

export default App;
