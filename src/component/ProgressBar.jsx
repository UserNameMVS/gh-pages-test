import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ skill }) => {
    return (
        <div className="row">
            <div className="col-md-4">
                <h4>{skill.name}</h4>
            </div>
            <div className="col-md-8">
                <div
                    className="progress"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div className="progress-bar" style={{ width: `${skill.level}%` }}>
                        {skill.level}%
                    </div>
                </div>
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    skill: PropTypes.object
};
export default ProgressBar;
