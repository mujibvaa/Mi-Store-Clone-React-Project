import './App.css';
import PreNavBar from './components/PreNavBar';
import NavBar from "./components/NavBar.js";
import { BrowserRouter as Router } from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"


function App() {


  return (

    <Router>
      <PreNavBar/>
      <NavBar/> 
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
 
    </Router>
   

  );
}

export default App;
