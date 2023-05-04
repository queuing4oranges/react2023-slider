import React, { useState } from "react";
import Carousel from "../Carousel";
import CarouselSlider from "../CarouselSlider"



const App = () => {
  const [currentPerson, setCurrentPerson] = useState(0)

  return (
    <main>
      <CarouselSlider/>

      {/* <Carousel 
        currentPerson={currentPerson}
        setCurrentPerson={setCurrentPerson}
        /> */}
    </main>
  );
};
export default App;
