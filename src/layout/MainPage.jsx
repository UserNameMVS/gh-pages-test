import React, { useContext, useEffect } from "react";
import TitleBlock from "../mainPage/TitleBlock";
import CardList from "../mainPage/CardList";
import { TeamContext } from "../hooks/useTeam";
import { useHistory } from "react-router-dom";
import Loader from "../component/Loader";

const MainPage = () => {
    const { team, getUpdateTeamPerson, getLocation } = useContext(TeamContext);
    console.log(team);
    const history = useHistory();
    const handleGoToCard = (id) => {
        history.push(`/${id}`);
    };
    const handleSetBookmark = (bookmark1, id) => {
        const person = team.filter((person) => person.id === id);
        const newPerson = { ...person[0], bookmark: !person[0].bookmark };
        getUpdateTeamPerson(id, newPerson);
        if (bookmark1 === "bi bi-bookmark" || undefined) {
            return "bi bi-bookmark-fill";
        } else {
            return "bi bi-bookmark";
        }
    };
    useEffect(() => {
        getLocation(history.location.pathname);
    }, []);

    return team ? (
        <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ backgroundColor: "#DCDCDC" }}
        >
            <TitleBlock />
            <CardList
                team={team}
                onCard={() => handleGoToCard()}
                setBookmark={() => handleSetBookmark()}
            />
        </div>
    ) : (
        <Loader />
    );
};

export default MainPage;
