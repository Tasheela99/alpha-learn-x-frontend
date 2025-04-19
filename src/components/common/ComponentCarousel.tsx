import React, { useState } from 'react';

const ComponentCarousel = () => {
  const components = ["Bulb", "Battery", "Wires", "Transistor", "Switch", "Resistor", "LED", "Capacitor"];
  const [visibleComponents, setVisibleComponents] = useState(components.slice(0, 5));
  
  const handleNext = () => {
    // Move items like a queue
    const newComponents = [...visibleComponents];
    newComponents.shift(); // Remove first item
    const nextIndex = components.indexOf(visibleComponents[visibleComponents.length - 1]) + 1;
    if (nextIndex < components.length) {
      newComponents.push(components[nextIndex]); // Add next item
    } else {
      newComponents.push(components[0]); // Loop back to first item
    }
    setVisibleComponents(newComponents);
  };
  
  const handlePrev = () => {
    const newComponents = [...visibleComponents];
    newComponents.pop(); // Remove last item
    const prevIndex = components.indexOf(visibleComponents[0]) - 1;
    if (prevIndex >= 0) {
      newComponents.unshift(components[prevIndex]); // Add previous item at beginning
    } else {
      newComponents.unshift(components[components.length - 1]); // Loop back to last item
    }
    setVisibleComponents(newComponents);
  };
  
  return (
    <div className="container-fluid py-3">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-auto">
          <button className="border border-1 bg-white border-dark py-1 px-2" onClick={handlePrev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </div>
        
        {visibleComponents.map((component, index) => (
          <div className="col-auto px-2" key={index}>
            <div className="border border-1 border-dark bg-white py-1 px-3 d-flex justify-content-center">
              {component}
            </div>
          </div>
        ))}
        
        <div className="col-auto">
          <button className="border border-1  bg-white border-dark py-1 px-2" onClick={handleNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentCarousel;