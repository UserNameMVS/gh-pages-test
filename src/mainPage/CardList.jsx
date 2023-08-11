import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({ team, onCard, setBookmark }) => {
    return (
        <div className="d-flex justify-content-around flex-wrap mt-2">
            {team.map((el) => (
                <Card key={el.id} info={el} onCard={onCard} setBookmark={setBookmark}/>
            ))}
        </div>
    );
};
CardList.propTypes = {
    team: PropTypes.array,
    onCard: PropTypes.func,
    setBookmark: PropTypes.func
};
export default CardList;
