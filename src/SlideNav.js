import React from 'react';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import SlideThumb from './SlideThumb';
import { upNext } from './util';

let thumbCount = 4;

let SlideNav = ({ slides, slideIndex, goTo }) =>
  <nav className="slide-nav">
    <TransitionGroup component={null}>
      { upNext(thumbCount, slides, slideIndex).map(slide =>
        <CSSTransition
          key={slide.path}
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
          <SlideThumb slide={slide} onClick={e => goTo(slide.index)} />
        </CSSTransition>
      )}
    </TransitionGroup>
  </nav>

export default SlideNav;
