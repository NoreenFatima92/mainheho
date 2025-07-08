
import './App.css';

import Navbar from "./components/navbar/Navbar"
import Carousel from "./components/slider/Carousel"
import Footer from "./components/footer/Footer"
import Form from "./components/form/Form"
import Cards from "./components/cards/Cards"
import Multicards from "./components/multiplecards/Multicards"

import MySwiperComponent from './components/slider/Swiper';

function App() {

  let navoptions = {
    home: "Homes",
    about: "About",

    project: "Projects",

   experience: "Experience",

    contact: "ContactUS",

  }
  return (
    <div className="App">
      <Navbar navlinks={navoptions} />
      <Carousel />
      <Multicards />
      <Footer />
      {/* <Form/> */}
      <MySwiperComponent />


    </div>
  );
}

export default App;
