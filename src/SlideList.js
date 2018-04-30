import React from 'react';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import Slide from './Slide';

let SlideList = ({
  slides,
  slideIndex,
  next,
}) =>
  <div className="slide-list"
    onClick={next}
  >
    <TransitionGroup component={null}>
      <CSSTransition
        key={slides[slideIndex].path}
        timeout={1000}
        classNames={{
          appear: '',
          appearActive: '',
          enter: 'animated fadeInUp forward',
          enterActive: 'animated fadeInUp forward',
          enterDone: '',
          exit: 'animated fadeOutUp',
          exitActive: 'animated fadeOutUp',
          exitDone: '',
        }}
      >
        <Slide slide={slides[slideIndex]} />
      </CSSTransition>
    </TransitionGroup>
  </div>

export default SlideList;


          // enter: 'animated zoomInBig forward',
          // enterActive: 'animated zoomInBig forward',
          // enterDone: '',
          // exit: 'animated zoomOutLeft',
          // exitActive: 'animated zoomOutLeft',
