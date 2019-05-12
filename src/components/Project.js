import React from 'react';


const Project = (props) => {
    const { name, picture, description, siteLink, codeLink } = props;


    // CHANGE SO THAT URL TO BACKGROUND IMAGE IS NOT HARD CODED
    return (
        <div className="project">
            <div className="initial-background" />
            <div className="project-background" style={{ backgroundImage: `url(${picture})` }} />
            <div className="filter-color" />
            <div className="project-text">
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="buttons-container">
                    { siteLink && <button
                        className="project-btn"
                        onClick={() => window.location.href = siteLink}
                    >
                        View App
                    </button> }
                    { codeLink && <button
                        className="project-btn"
                        onClick={() => window.location.href = codeLink}
                    >
                        View Code
                    </button> }
                </div>
            </div>
        </div>
    );
}

export default Project;