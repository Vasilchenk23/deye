import "./App.css";
import { Carousel } from "./components/Carousel";
import { Main } from "./components/Main";
import carouselData from "./data/carouselData.json"; // JSON імпорт

const slides = carouselData.slides; // Отримуємо масив

function App() {
  return (
    <div className="App">
      <Main/>
      <Carousel data={slides} /> {/* Передаємо масив у компонент */}
    </div>
  );
}

export default App;
