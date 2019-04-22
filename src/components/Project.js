import React from 'react';


const Project = (props) => {
    const { name, picture, description } = props;


    // CHANGE SO THAT URL TO BACKGROUND IMAGE IS NOT HARD CODED
    return (
        <div className="project">
        <div className="initial-background" />
            <div className="project-background" style={{'background-image': `url(${picture})`}}/>
            <div className="filter-color" />
            <div className="project-text">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="buttons-container">
                <button className="project-btn">View App</button>
                <button className="project-btn">View Code</button>
            </div>
            </div>
        </div>
    );
}

export default Project;