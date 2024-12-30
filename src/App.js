import "./App.css";
import { Carousel } from "./components/Carousel";
import { Solution } from "./components/Solution";
import { Main } from "./components/Main";
import { Goals } from "./components/Goals";
import { Contact } from "./components/Contact";
import carouselData from "./data/carouselData.json"; 
import { Footer } from "./components/Footer";
import { Goods } from "./components/Goods";

const slides = carouselData.slides; 

function App() {
  return (
    <div className="App">
      <Main/>
      <Carousel data={slides} /> 
      <Solution/>
      <Goals/>
      <Goods/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
