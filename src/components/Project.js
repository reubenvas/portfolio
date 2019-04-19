import React from 'react';

const Project = (props) => {
    const { name, description } = props;

    return (
        <div className="project">
            <div className="project-background" />
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