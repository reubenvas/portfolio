import React from 'react';

const Project = (props) => {

    const { name, description } = props;
    console.log(name, description);

    return (
        <div className="project">
            <h2>{name}</h2>
            <p>{description}</p>
            <button>Buttons to link me further</button>
            <small>some cool hover or focus effect</small>
        </div>
    );
}

export default Project;