import React, { useState } from "react";
import PropTypes from "prop-types";

const Icon = ({
    reference,
    getTooltip,
    className,
    role,
    databstitle,
    setBookmark,
    bookmark,
    id
}) => {
    const [classForBookmark, setClassForBookmark] = useState(
        bookmark ? "bi bi-bookmark-fill" : className
    );
    const tooltip = getTooltip(reference);
    return (
        <i
            ref={reference}
            data-bs-toggle={tooltip}
            data-bs-title={
                typeof databstitle === "string"
                    ? databstitle
                    : classForBookmark !== "bi bi-bookmark-fill"
                    ? databstitle[0]
                    : databstitle[1]
            }
            className={classForBookmark || className}
            role={role}
            onClick={() => {
                setClassForBookmark(setBookmark(classForBookmark, id));
                tooltip.dispose();
            }}
        ></i>
    );
};
Icon.propTypes = {
    reference: PropTypes.object,
    getTooltip: PropTypes.func,
    className: PropTypes.string,
    role: PropTypes.string,
    databstitle: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    setBookmark: PropTypes.func,
    bookmark: PropTypes.bool,
    id: PropTypes.string
};
export default Icon;
