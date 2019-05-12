import React from 'react'
import Typist from 'react-typist';

import { animateScroll } from 'react-scroll';

function scrollTo(query) {
    let element = document.querySelector(query).getBoundingClientRect().top;
    console.log(element);
    element += 0.001;
    animateScroll.scrollTo(element, { smooth: true, duration: 3000, delay: 500 });
}

class FullScreenText extends React.Component {

    componentWillMount = () => {
        window.document.body.style.overflowY = 'hidden';
    }

    render() {
        const { children, className} = this.props;
        const sentences = children.split('#');
        const lines = [];

    return (
        <div className={`${className} container--fullscreen`} >
            <Typist cursor={{ show: false }} onLineTyped={(line, lineIdx) => {
                lines.push(line);
                console.log(lines);
                if (lines.length === 6) {
                    scrollTo('.Home');
                    setTimeout(() => window.document.body.style.overflowY = 'visible', 3510)

                }
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
}


const styles = {
    heading: (textLength) => {
        const fontSize = 20 - textLength / 3;
        return {fontSize: `${fontSize}vh`};
    },
}

export default FullScreenText;