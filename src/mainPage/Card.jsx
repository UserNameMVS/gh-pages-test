import React, { useRef } from "react";
import PropTypes from "prop-types";
import Icon from "../component/Icon";
import getTooltip from "../utils/Tooltip";
import Button from "../component/Button";

const Card = ({ info, onCard, setBookmark }) => {
    const tooltipRef1 = useRef(null);
    const tooltipRef2 = useRef(null);
    const tooltipRef3 = useRef(null);
    const tooltipRef4 = useRef(null);

    return (
        <div className="d-flex flex-column align-items-center my-3 mx-2">
            <div
                className="card h-100 col d-flex align-items-stretch direction-column shadow rounded "
                style={{ maxWidth: "300px", background: "#DCDCDC" }}
            >
                <div>
                    <img src={info.image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body d-flex flex-column justify-content-center">
                    <div>
                        <h5
                            className="card-title"
                            style={{ minHeight: "60px" }}
                        >
                            {info.surname + " " + info.name}
                        </h5>
                    </div>
                    <div>
                        <p className="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                        </p>
                    </div>
                    <div>
                        <div className="d-flex justify-content-around mb-2">
                            <Icon
                                className="bi bi-facebook"
                                role="button"
                                reference={tooltipRef1}
                                getTooltip={getTooltip}
                                databstitle="Go to my Facebook"
                            />
                            <Icon
                                className="bi bi-twitter"
                                role="button"
                                reference={tooltipRef2}
                                getTooltip={getTooltip}
                                databstitle="Go to my Twitter"
                            />
                            <Icon
                                className="bi bi-instagram"
                                role="button"
                                reference={tooltipRef3}
                                getTooltip={getTooltip}
                                databstitle="Go to my Instagram"
                            />
                            <Icon
                                className="bi bi-bookmark"
                                role="button"
                                reference={tooltipRef4}
                                getTooltip={getTooltip}
                                databstitle={[
                                    "Add to favorite list",
                                    "Remove from favorite list"
                                ]}
                                setBookmark={setBookmark}
                                bookmark={info.bookmark}
                                id={info.id}
                            />
                        </div>
                        <div>
                            <Button
                                className={"btn btn-primary"}
                                onClick={() => onCard(info.id)}
                            >
                                Посмотреть
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    info: PropTypes.object,
    onCard: PropTypes.func,
    setBookmark: PropTypes.func
};
export default Card;
