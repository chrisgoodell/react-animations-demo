import React from 'react';
import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import SlideList from './SlideList';
import SlideNav from './SlideNav';
import { wrap } from './util';

let Slideshow = (props) =>
  <div className="App">
    <SlideList {...props} />
    <SlideNav {...props} />
  </div>

let enhance = compose(
  withState('slideIndex', 'goTo', 0),
  withHandlers({
    next: ({ slides, slideIndex, goTo }) => () => goTo(wrap(slides.length, slideIndex, 1)),
    prev: ({ slides, slideIndex, goTo }) => () => goTo(wrap(slides.length, slideIndex, -1)),
  }),
);

export default enhance(Slideshow);
