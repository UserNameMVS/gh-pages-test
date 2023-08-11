import React from "react";
import PropTypes from "prop-types";

const Badge = ({ role }) => {
    return (
        <div className="d-flex justify-content-end mt-2 my-2">
            {role.map((el, index) => (
                <span
                    className="badge text-bg-success me-1"
                    key={index}
                >
                    <h6>{el}</h6>
                </span>
            ))}
        </div>
    );
};
Badge.propTypes = {
    role: PropTypes.array
};
export default Badge;
