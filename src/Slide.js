import React from 'react';

let Slide = ({ slide }) =>
  <div className="slide">
    <img className="slide-image" alt={slide.title} src={`/images/${slide.path}`} />
  </div>

export default Slide;
