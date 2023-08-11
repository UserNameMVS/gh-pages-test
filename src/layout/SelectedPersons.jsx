import React, { useContext, useEffect } from "react";
import TitleBlock from "../mainPage/TitleBlock";
import CardList from "../mainPage/CardList";
import { TeamContext } from "../hooks/useTeam";
import { useHistory } from "react-router-dom";

const SelectedPersons = () => {
    const { team, getUpdateTeamPerson, getLocation } = useContext(TeamContext);
    const history = useHistory();
    const newTeams = team.filter((person) => person.bookmark === true);
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
    return (
        newTeams && (
            <div
                className="d-flex flex-column justify-content-center align-items-center "
                style={{ backgroundColor: "#DCDCDC" }}
            >
                <TitleBlock />
                <CardList
                    team={newTeams}
                    onCard={handleGoToCard}
                    setBookmark={handleSetBookmark}
                />
                {newTeams.length === 0 && (
                    <div className="d-flex justify-content-center mb-5">
                        <div
                            className="row w-75 rounded-4 mt-5"
                            style={{ background: "red" }}
                        >
                            <div className="col text-center text-white pt-3">
                                <h1 className="pb-2">
                                    К сожалению Вы пока никого не выбрали!
                                </h1>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    );
};

export default SelectedPersons;
