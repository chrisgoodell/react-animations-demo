import React from 'react';

let SlideThumb = ({ slide, onClick }) =>
  <div className="slide-thumb" onClick={onClick}>
    <img className="slide-thumb-image" alt={slide.title} src={`/images/${slide.path}`} />
    <h2 className="slide-thumb-title">{slide.title}</h2>
  </div>

export default SlideThumb;
