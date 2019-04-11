import React from 'react'
import Typist from 'react-typist';

import { animateScroll } from 'react-scroll';

function scrollTo(query) {
    const element = document.querySelector(query).getBoundingClientRect().top;
    animateScroll.scrollTo(element, { smooth: true, duration: 3000, delay: 500 });
}


const FullScreenText = props => {
    const { children, className} = props;
    const sentences = children.split('#');
    const lines = [];

    return (
        <div className={`${className} container--fullscreen`} >
            <Typist cursor={{ show: false }} onLineTyped={(line, lineIdx) => {
                lines.push(line);
                console.log(lines);
                if (lines.length === 6) scrollTo('.Home');
            }}>
                {sentences.map((s, i, arr) => {
                    const backspaces = arr.length - 1 !== i ? s.length : 0;
                    return (
                        <div key={i}>
                            <h4 style={styles.heading(s.length)}>
                                <span>{s}</span>
                                {<Typist.Backspace count={backspaces} delay={500} />}
                            </h4>
                        </div>
                    );
                })}
            </Typist>
        </div>
    )
}


const styles = {
    heading: (textLength) => {
        const fontSize = 20 - textLength / 3;
        return {
            fontSize: `${fontSize}vh`,
            fontFamily: 'Source Sans Pro, sans-serif',
        };
    },
}

export default FullScreenText;