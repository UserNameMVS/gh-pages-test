import React, { useContext, useEffect, useRef, useState } from "react";
import ProgressBar from "../component/ProgressBar";
import Badge from "../component/Badge";
import { useParams } from "react-router-dom";
import { TeamContext } from "../hooks/useTeam";
import Slider from "../component/Slider";
import Icon from "../component/Icon";
import getTooltip from "../utils/Tooltip";
import Loader from "../component/Loader";

const CardPerson = () => {
    const { cardId } = useParams();
    const { getTeamPerson, team, getUpdateTeamPerson } =
        useContext(TeamContext);
    const [person, setPerson] = useState();
    const tooltipRef1 = useRef(null);
    const tooltipRef2 = useRef(null);
    const tooltipRef3 = useRef(null);
    const tooltipRef4 = useRef(null);

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
        const getPersonById = async (id) => {
            try {
                const data = await getTeamPerson(id);
                setPerson(data);
            } catch (error) {
                console.log(error);
            }
        };
        getPersonById(cardId);
    }, []);

    return (
        person ? (
            <div
                className="d-flex align-items-center flex-column"
                style={{ background: "#DCDCDC" }}
            >
                <div
                    className="d=flex card my-3 shadow rounded border-2"
                    style={{ maxWidth: "80%", background: "#DCDCDC" }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={person.image}
                                className="img-fluid rounded-2 my-2 mx-2"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <Badge role={person.role} />
                            <div className="card-body position-relative ">
                                <h5 className="card-title">
                                    Меня зовут{" "}
                                    {person.surname + " " + person.name}
                                </h5>
                                <p>Мне {person.age} лет</p>
                                <p>
                                    This is a wider card with supporting text
                                    below as a natural lead-in to addition
                                </p>
                                <p>Меня можно найти в : </p>

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
                                        setBookmark={handleSetBookmark}
                                        bookmark={person.bookmark}
                                        id={cardId}
                                    />
                                </div>
                                <p className="card-text">
                                    В нашей команде я отвечаю за дизайн, креатив
                                    и разработку содержания контента
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 mx-4 my-4">
                        <h2>Мои навыки :</h2>
                        {person.skills.map((el) => (
                            <ProgressBar key={el.name + 1} skill={el} />
                        ))}
                    </div>
                </div>
                <Slider works={person.works}/>
            </div>
        ) : <Loader/>
    );
};

export default CardPerson;
