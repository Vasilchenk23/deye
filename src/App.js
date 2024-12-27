import "./App.css";
import { Carousel } from "./components/Carousel";
import { Solution } from "./components/Solution";
import { Main } from "./components/Main";
import carouselData from "./data/carouselData.json"; 

const slides = carouselData.slides; 

function App() {
  return (
    <div className="App">
      <Main/>
      <Carousel data={slides} /> 
      <Solution/>
    </div>
  );
}

export default App;
