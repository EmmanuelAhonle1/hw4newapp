import React, { useState } from 'react';

function Slider() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div>
      <h1>Slider Component</h1>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>Value: {sliderValue}</p>
    </div>
  );
}

export default Slider;
