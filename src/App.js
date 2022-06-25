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
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"

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

       <Route exact path='/smartdevice' element= {<HotGadget smartDevice ={data.hotAccessories.smartDevice} smartCover={data.hotAccessoriesCover.smartDevice} />} >
       </Route>

       <Route exact path='/home' element= {<HotGadget home ={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} >
       </Route>

       <Route exact path='/lifestyle' element= {<HotGadget lifestyle ={data.hotAccessories.lifeStyle} lyfCover={data.hotAccessoriesCover.lifeStyle} />} >
       </Route>

       <Route exact path='/mobileacc' element= {<HotGadget mobileacc ={data.hotAccessories.mobileAccessories} mobileaccCover={data.hotAccessoriesCover.mobileAccessories} />} >
       </Route>

      </Routes>  


      <Heading text ="PRODUCT REVIEWS"/>
      <ProductReviews productReviews = {data.productReviews}/>


      <Heading text ="VIDEOS"/>
      <Videos videos = {data.videos}/>
 
    </Router>
   

  );
}

export default App;
