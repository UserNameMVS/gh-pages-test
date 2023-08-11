import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import SliderItem from "./SliderItem";

const Slider = ({ works }) => {
    const divWidth = useRef(null);
    const [offset, setOffset] = useState(0);
    function getWidthDiv() {
        const a = divWidth.current;
        if (a) {
            return a.querySelector("div").clientWidth;
        }
    }
    const pageWidth = getWidthDiv();
    const handleOnLeft = () => {
        return setOffset((prevState) => Math.min(prevState + pageWidth, 0));
    };
    const handleOnRight = () => {
        setOffset((prevState) => Math.max(prevState - pageWidth, -pageWidth * 2));
    };
    return (
        <>
        <h2>Мои работы</h2>
            <div
                className="d-flex align-items-center mx-2 mb-4"
                style={{ width: "550px", height: "150px" }}
            >
                <i
                    className="bi bi-caret-left-fill fs-2"
                    role="button"
                    onClick={handleOnLeft}
                ></i>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }}
                >
                    <div
                        ref={divWidth}
                        className="d-flex"
                        style={{
                            height: "100%",
                            transform: `translateX(${offset}px)`,
                            transition: "translate",
                            transitionProperty: "transform",
                            transitionDuration: "300ms",
                            transitionTimingFunction: "ease-in-out"
                        }}
                    >
                        {works.map((el, index) => (
                            <SliderItem key={index} image={el} />
                        ))}
                    </div>
                </div>
                <i
                    className="bi bi-caret-right-fill fs-2"
                    role="button"
                    onClick={handleOnRight}
                ></i>
            </div>
        </>
    );
};
Slider.propTypes = {
    works: PropTypes.array
};

export default Slider;
