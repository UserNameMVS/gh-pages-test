import React from "react";
import PropTypes from "prop-types";

const SliderItem = ({ image }) => {
    return (
        <div
            className="d-flex justify-content-center align-items-center bg-primary"
            style={{
                maxwidth: "100%",
                minWidth: "100%",
                height: "100%"
            }}
        >
            <img
                src={image}
                className="w-100 h-100"
                alt="..."
            />
        </div>
    );
};
SliderItem.propTypes = {
    image: PropTypes.string
};
export default SliderItem;
