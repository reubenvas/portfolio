import React from 'react';
import FullScreenText from './FullScreenText';

import { animateScroll } from 'react-scroll';

function scrollTo(query) {
    const element = document.querySelector(query).getBoundingClientRect().top;
    animateScroll.scrollTo(element, {smooth: true, duration: 3000, delay: 500});
  }


const Hi = (props) => {
    // checking partial visibility
    console.log('is Hi visible?', props.isVisible);
    // if(props.isVisible) scrollTo('.Home');
    return (
        <React.Fragment>
            <FullScreenText className='Greeting'>Hi</FullScreenText>
        </React.Fragment>
    )
}

export default Hi;
