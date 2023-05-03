import React, { useState } from "react";
import Carousel from "../Carousel";


const App = () => {
  const [currentPerson, setCurrentPerson] = useState(0)

  return (
    <main>
      <Carousel 
        currentPerson={currentPerson}
        setCurrentPerson={setCurrentPerson}
        />
    </main>
  );
};
export default App;
